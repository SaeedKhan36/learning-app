package com.mcq.config;

import org.springframework.context.annotation.Configuration;

/**
 * Mock Security Configuration.
 * Notice: For production, we would inject Spring Security components 
 * (@EnableWebSecurity, SecurityFilterChain, JwtAuthenticationFilter).
 * 
 * Since this is currently a standalone mock backend without a frontend, 
 * we leave endpoints functionally open but structurally prepared.
 */
@Configuration
public class SecurityConfigMock {

    // e.g. 
    // @Bean
    // public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    //     http.csrf().disable()
    //         .authorizeHttpRequests(authz -> authz
    //             .requestMatchers("/api/v1/auth/**").permitAll()
    //             .anyRequest().authenticated()
    //         )
    //         .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    //     return http.build();
    // }
}
