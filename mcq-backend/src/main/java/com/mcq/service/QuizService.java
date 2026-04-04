package com.mcq.service;

import com.mcq.aspect.LogExecutionTime;
import com.mcq.dto.ResultDTO;
import com.mcq.dto.SubmitQuizDTO;
import com.mcq.event.QuizSubmittedEvent;
import com.mcq.mapper.ResultMapper;
import com.mcq.model.Result;
import com.mcq.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final ResultMapper resultMapper;
    private final ApplicationEventPublisher eventPublisher;

    /**
     * Submit user answers and calculate results, firing an asynchronous event for decoupling.
     */
    @LogExecutionTime
    public ResultDTO submitQuiz(SubmitQuizDTO dto) {
        
        int mockScore = (int) (Math.random() * 5) + 5; 
        int mockTotal = 10;
        
        User mockUser = new User();
        mockUser.setId(dto.getUserId());
        mockUser.setName("Analytics User");

        Result mockEntity = Result.builder()
                .user(mockUser)
                .score(mockScore)
                .totalQuestions(mockTotal)
                .timeTaken(dto.getTimeTakenSeconds())
                .build();
        mockEntity.setId(999L);
        
        ResultDTO resultDto = resultMapper.toDto(mockEntity);
        
        // Fire decoupled event (handled by NotificationEventListener & AnalyticsEventListener)
        eventPublisher.publishEvent(new QuizSubmittedEvent(this, mockEntity.getId(), dto.getUserId()));
        
        return resultDto;
    }
}
