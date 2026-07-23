package com.deployai.backend.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.Map;

@Component
public class GitHubClient {

    private final RestClient restClient;

    public GitHubClient() {

        this.restClient = RestClient.builder()
                .baseUrl("https://api.github.com")
                .build();

    }

    @SuppressWarnings("unchecked")
    public Map<String, Object> getRepository(String owner, String repo) {

        return (Map<String, Object>) restClient.get()
                .uri("/repos/{owner}/{repo}", owner, repo)
                .retrieve()
                .body(Map.class);

    }

}