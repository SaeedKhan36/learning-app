package com.mcq.event;

import org.springframework.context.ApplicationEvent;

public class QuizSubmittedEvent extends ApplicationEvent {
    
    private final Long resultId;
    private final Long userId;

    public QuizSubmittedEvent(Object source, Long resultId, Long userId) {
        super(source);
        this.resultId = resultId;
        this.userId = userId;
    }

    public Long getResultId() {
        return resultId;
    }

    public Long getUserId() {
        return userId;
    }
}
