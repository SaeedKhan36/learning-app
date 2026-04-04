package com.mcq.service;

import com.mcq.dto.QuestionDTO;
import com.mcq.model.enums.DifficultyLevel;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Service
public class QuestionService {

    /**
     * Represents a resilient service layer.
     * In a real deployment, we inject QuestionRepository and add caching mechanism (@Cacheable).
     * Here we return mocked domain records wrapped in DTOs to hide internal entity graphs.
     */
    public List<QuestionDTO> getAllMockQuestions() {
        return Arrays.asList(
            QuestionDTO.builder()
                .id(1L)
                .title("What is the main design pattern used in Spring DI?")
                .optionA("Observer Pattern")
                .optionB("Singleton Pattern / Factory Pattern")
                .optionC("Builder Pattern")
                .optionD("Decorator Pattern")
                .difficultyLevel(DifficultyLevel.INTERMEDIATE)
                .tags("spring,di,patterns")
                .categoryId(101L)
                .categoryName("Spring Framework")
                .createdAt(LocalDateTime.now())
                .build(),

            QuestionDTO.builder()
                .id(2L)
                .title("Which interface is extended by JpaRepository in Spring Data?")
                .optionA("PagingAndSortingRepository")
                .optionB("CrudRepository")
                .optionC("QueryByExampleExecutor")
                .optionD("Session")
                .difficultyLevel(DifficultyLevel.ADVANCED)
                .tags("spring-boot,jpa")
                .categoryId(101L)
                .categoryName("Spring Framework")
                .createdAt(LocalDateTime.now().minusDays(1))
                .build()
        );
    }
}
