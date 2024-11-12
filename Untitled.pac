function FindProxyForURL(url, host) {
    // Directly access local addresses
    if (shExpMatch(host, "*.local")) {
        return "DIRECT";
    }

    // Use proxy for all other requests
    return "PROXY 47.88.3.19:8080";
}
