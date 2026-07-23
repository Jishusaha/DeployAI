package com.deployai.backend.service;

import com.deployai.backend.client.GitHubClient;
import com.deployai.backend.dto.AnalyzeRequest;
import com.deployai.backend.dto.AnalyzeResponse;
import com.deployai.backend.utils.RepositoryParser;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RepositoryService {

    private final GitHubClient gitHubClient;

    public RepositoryService(GitHubClient gitHubClient) {
        this.gitHubClient = gitHubClient;
    }

    public AnalyzeResponse analyzeRepository(AnalyzeRequest request) {

        String[] repoInfo = RepositoryParser.parse(request.getUrl());

        String owner = repoInfo[0];
        String repo = repoInfo[1];

        Map<String, Object> repository =
                gitHubClient.getRepository(owner, repo);

        String language = (String) repository.get("language");

        Integer stars =
                (Integer) repository.get("stargazers_count");

        return new AnalyzeResponse(
                repo,
                owner,
                detectFramework(language),
                language,
                stars == null ? 0 : stars,
                95,
                recommendDeployment(language)
        );

    }

    private String detectFramework(String language) {

        if (language == null)
            return "Unknown";

        switch (language) {

            case "JavaScript":
                return "Next.js";

            case "TypeScript":
                return "TypeScript Project";

            case "Python":
                return "FastAPI";

            case "Java":
                return "Spring Boot";

            default:
                return language;

        }

    }

    private String recommendDeployment(String language) {

        if (language == null)
            return "Docker";

        switch (language) {

            case "JavaScript":
                return "Vercel";

            case "TypeScript":
                return "Vercel";

            case "Python":
                return "Railway";

            case "Java":
                return "Render";

            default:
                return "Docker";

        }

    }

}