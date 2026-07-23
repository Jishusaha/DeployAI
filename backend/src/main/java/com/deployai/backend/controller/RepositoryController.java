package com.deployai.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.deployai.backend.dto.AnalyzeRequest;
import com.deployai.backend.dto.AnalyzeResponse;
import com.deployai.backend.service.RepositoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RepositoryController {

    private final RepositoryService repositoryService;

    public RepositoryController(RepositoryService repositoryService) {
        this.repositoryService = repositoryService;
    }

    @PostMapping("/analyze")
    public ResponseEntity<AnalyzeResponse> analyze(
            @Valid @RequestBody AnalyzeRequest request) {

        AnalyzeResponse response =
                repositoryService.analyzeRepository(request);

        return ResponseEntity.ok(response);
    }

}