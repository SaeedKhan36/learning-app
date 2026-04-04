package com.mcq.event.listener;

import com.mcq.event.QuizSubmittedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class AnalyticsEventListener {

    /**
     * Simulates pushing events to a streaming platform like Kafka for data science.
     * Decoupled from the main submission thread.
     */
    @Async
    @EventListener
    public void pushToAnalyticsPlatform(QuizSubmittedEvent event) {
        System.out.println("[ASYNC EVENT] Sending result ID " + event.getResultId() + 
            " for User ID " + event.getUserId() + " to Data Warehouse.");
    }
}
