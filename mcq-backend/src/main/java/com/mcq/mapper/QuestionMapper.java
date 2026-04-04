package com.mcq.mapper;

import com.mcq.dto.QuestionDTO;
import com.mcq.model.Question;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class QuestionMapper {

    /**
     * Replaces direct object building overhead in Services.
     * Decouples Entity layer from the presentation API.
     */
    public QuestionDTO toDto(Question entity) {
        if (entity == null) {
            return null;
        }

        return QuestionDTO.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .optionA(entity.getOptionA())
                .optionB(entity.getOptionB())
                .optionC(entity.getOptionC())
                .optionD(entity.getOptionD())
                .difficultyLevel(entity.getDifficultyLevel())
                .tags(entity.getTags())
                .categoryId(entity.getCategory() != null ? entity.getCategory().getId() : null)
                .categoryName(entity.getCategory() != null ? entity.getCategory().getName() : null)
                .createdAt(entity.getCreatedDate())
                .build();
    }

    public List<QuestionDTO> toDtoList(List<Question> entities) {
        return entities.stream().map(this::toDto).collect(Collectors.toList());
    }
}
