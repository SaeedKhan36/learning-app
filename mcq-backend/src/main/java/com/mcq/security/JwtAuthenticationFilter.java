package com.mcq.security;

import org.springframework.stereotype.Component;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import org.springframework.web.filter.OncePerRequestFilter;
// import java.io.IOException;

/**
 * Mock JWT Security Filter. 
 * This shows where token validation logic would reside in a real Spring app.
 */
@Component
public class JwtAuthenticationFilter /* extends OncePerRequestFilter */ {

    /*
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        
        // 1. Extract Token
        // String authHeader = request.getHeader("Authorization");
        
        // 2. Validate Token
        // if (token is valid) set SecurityContextHolder.getContext().setAuthentication(auth);
        
        filterChain.doFilter(request, response);
    }
    */
}
