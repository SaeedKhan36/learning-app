package com.mcq.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LoggingAspect {

    /**
     * Intercepts methods annotated with @LogExecutionTime and measures their runtime.
     * Essential for profiling and metrics gathering in production.
     */
    @Around("@annotation(com.mcq.aspect.LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        Object proceed = joinPoint.proceed();

        long executionTime = System.currentTimeMillis() - start;

        System.out.println("[AOP METRIC] " + joinPoint.getSignature() + " executed in " + executionTime + "ms");
        
        return proceed;
    }
}
