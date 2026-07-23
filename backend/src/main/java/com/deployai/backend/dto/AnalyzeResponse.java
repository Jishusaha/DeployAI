package com.deployai.backend.dto;

public class AnalyzeResponse {

    private String repository;
    private String owner;
    private String framework;
    private String language;
    private int stars;
    private int score;
    private String deployment;

    public AnalyzeResponse() {
    }

    public AnalyzeResponse(
            String repository,
            String owner,
            String framework,
            String language,
            int stars,
            int score,
            String deployment) {

        this.repository = repository;
        this.owner = owner;
        this.framework = framework;
        this.language = language;
        this.stars = stars;
        this.score = score;
        this.deployment = deployment;
    }

    public String getRepository() {
        return repository;
    }

    public void setRepository(String repository) {
        this.repository = repository;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getFramework() {
        return framework;
    }

    public void setFramework(String framework) {
        this.framework = framework;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getDeployment() {
        return deployment;
    }

    public void setDeployment(String deployment) {
        this.deployment = deployment;
    }
}
