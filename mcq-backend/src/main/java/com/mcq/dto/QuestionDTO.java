package com.mcq.dto;

import com.mcq.model.enums.DifficultyLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDTO {
    private Long id;
    private String title;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private DifficultyLevel difficultyLevel;
    private String tags;
    private Long categoryId;
    private String categoryName;
    private LocalDateTime createdAt;
    // Omitted correctAnswer intentionally for external facing API
}
