package com.mcq.service;

import com.mcq.aspect.LogExecutionTime;
import com.mcq.dto.PagedResponseDTO;
import com.mcq.dto.QuestionDTO;
import com.mcq.mapper.QuestionMapper;
import com.mcq.model.Question;
import com.mcq.model.enums.DifficultyLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionMapper questionMapper;

    /**
     * Represents a resilient service layer with Pagination and Mappers decoupling.
     */
    @LogExecutionTime
    public PagedResponseDTO<QuestionDTO> getPaginatedQuestions(int pageNo, int pageSize) {
        // Mock DB entities
        Question mockEntity1 = Question.builder()
                .title("What is AOP in Spring?")
                .optionA("Aspect Oriented Programming")
                .optionB("Application Object Pattern")
                .optionC("Advanced Object Processing")
                .optionD("Automated Ordering Process")
                .correctAnswer("A")
                .difficultyLevel(DifficultyLevel.ADVANCED)
                .tags("spring,aop,advanced")
                .build();
        mockEntity1.setId(1L);

        List<Question> mockList = Arrays.asList(mockEntity1);
        List<QuestionDTO> dtoList = questionMapper.toDtoList(mockList);

        return PagedResponseDTO.<QuestionDTO>builder()
                .content(dtoList)
                .pageNo(pageNo)
                .pageSize(pageSize)
                .totalElements(1)
                .totalPages(1)
                .last(true)
                .build();
    }
}
