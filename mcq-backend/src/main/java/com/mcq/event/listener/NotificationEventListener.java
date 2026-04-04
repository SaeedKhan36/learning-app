package com.mcq.event.listener;

import com.mcq.event.QuizSubmittedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class NotificationEventListener {

    /**
     * Simulates generating a push notification or email summarizing the user's score asynchronously.
     */
    @Async
    @EventListener
    public void sendUserNotification(QuizSubmittedEvent event) {
        System.out.println("[ASYNC EVENT] Preparing SMS/Email notification for User ID " + event.getUserId());
    }
}
