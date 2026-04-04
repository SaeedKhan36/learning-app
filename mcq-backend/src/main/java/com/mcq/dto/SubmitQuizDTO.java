package com.mcq.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubmitQuizDTO {
    private Long userId;
    // Mapping of Question ID to selected option (e.g., "A", "B", "C", "D")
    private Map<Long, String> answers;
    private long timeTakenSeconds;
}
