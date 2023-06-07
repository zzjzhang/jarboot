package com.mz.jarboot.ws;

import com.mz.jarboot.common.utils.JsonUtils;
import com.mz.jarboot.terminal.TerminalProcess;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * @author mazheng
 */
@ServerEndpoint("/jarboot/main/terminal/ws")
@RestController
public class TerminalServer {
    private static final Logger logger = LoggerFactory.getLogger(TerminalServer.class);
    private final TerminalProcess terminal = new TerminalProcess();
    @OnOpen
    public void onOpen(Session session) {
        terminal.init(session);
        int col = 80;
        int row = 100;
        List<String> colParam = session.getRequestParameterMap().get("col");
        List<String> rowParam = session.getRequestParameterMap().get("row");
        if (null != colParam && !colParam.isEmpty()) {
            col = Integer.parseInt(colParam.get(0));
        }
        if (null != rowParam && !rowParam.isEmpty()) {
            row = Integer.parseInt(rowParam.get(0));
        }
        logger.info("启动终端，宽：{}, 高：{}", col, row);
        terminal.setWinSize(col, row);
    }
    @OnClose
    public void onClose( Session session) {
        terminal.destroy();
    }
    @OnError
    public void onError(Session session, Throwable error) {
        logger.debug(error.getMessage(), error);
        this.onClose(session);
    }

    @OnMessage
    public void onTextMessage(String message, Session session) {
        terminal.exec(message);
    }

    @OnMessage
    public void onBinaryMessage(byte[] message, Session session) {
        TermSize size = JsonUtils.readValue(message, TermSize.class);
        if (null == size) {
            String msg = new String(message, StandardCharsets.UTF_8);
            logger.error("解析窗口大小失败,msg:{}", msg);
            return;
        }
        logger.info("更新窗口大小，col:{}, row:{}", size.getCol(), size.getRow());
        terminal.setWinSize(size.getCol(), size.getRow());
    }

    public static class TermSize {
        private Integer col;
        private Integer row;

        public Integer getCol() {
            return col;
        }

        public void setCol(Integer col) {
            this.col = col;
        }

        public Integer getRow() {
            return row;
        }

        public void setRow(Integer row) {
            this.row = row;
        }
    }
}
