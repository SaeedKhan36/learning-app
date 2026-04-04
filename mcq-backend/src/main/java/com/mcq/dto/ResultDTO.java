package com.mcq.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResultDTO {
    private Long id;
    private Long userId;
    private String userName;
    private int score;
    private int totalQuestions;
    private double percentage;
    private long timeTaken;
    private String formattedTimeTaken;
    private LocalDateTime submittedAt;
}
