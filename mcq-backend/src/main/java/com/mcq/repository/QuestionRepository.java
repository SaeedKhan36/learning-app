package com.mcq.repository;

import com.mcq.model.Question;
import com.mcq.model.enums.DifficultyLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByDifficultyLevel(DifficultyLevel difficultyLevel);
    List<Question> findByCategoryId(Long categoryId);
}
