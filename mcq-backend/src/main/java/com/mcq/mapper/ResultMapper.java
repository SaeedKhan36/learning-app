package com.mcq.mapper;

import com.mcq.dto.ResultDTO;
import com.mcq.model.Result;
import com.mcq.util.DateUtil;
import com.mcq.util.ScoreCalculator;
import org.springframework.stereotype.Component;

@Component
public class ResultMapper {

    public ResultDTO toDto(Result entity) {
        if (entity == null) {
            return null;
        }

        double percentage = ScoreCalculator.calculatePercentage(entity.getScore(), entity.getTotalQuestions());

        return ResultDTO.builder()
                .id(entity.getId())
                .userId(entity.getUser() != null ? entity.getUser().getId() : null)
                .userName(entity.getUser() != null ? entity.getUser().getName() : null)
                .score(entity.getScore())
                .totalQuestions(entity.getTotalQuestions())
                .percentage(percentage)
                .timeTaken(entity.getTimeTaken())
                .formattedTimeTaken(DateUtil.formatDuration(entity.getTimeTaken()))
                .submittedAt(entity.getCreatedDate())
                .build();
    }
}
