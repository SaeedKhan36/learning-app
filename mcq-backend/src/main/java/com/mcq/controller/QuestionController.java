package com.mcq.controller;

import com.mcq.dto.PagedResponseDTO;
import com.mcq.dto.QuestionDTO;
import com.mcq.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    /**
     * Endpoint to fetch paginated questions.
     * Scale notes: For high throughput, responses should be paginated
     * and cached using a distributed cache like Redis.
     */
    @GetMapping
    public ResponseEntity<PagedResponseDTO<QuestionDTO>> getQuestions(
            @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
    ) {
        PagedResponseDTO<QuestionDTO> questions = questionService.getPaginatedQuestions(pageNo, pageSize);
        return ResponseEntity.ok(questions);
    }
}
