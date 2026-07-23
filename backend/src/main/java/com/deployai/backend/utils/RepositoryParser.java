package com.deployai.backend.utils;

public class RepositoryParser {

    public static String[] parse(String url) {

        url = url.trim();

        if (url.endsWith("/")) {
            url = url.substring(0, url.length() - 1);
        }

        String[] parts = url.split("/");

        if (parts.length < 5) {
            throw new IllegalArgumentException("Invalid GitHub URL");
        }

        return new String[]{
                parts[3],
                parts[4]
        };

    }

}
