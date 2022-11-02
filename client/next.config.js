const nextConfig = {
    experimental: {appDir: false},
    async headers() {
        return [
            {
                source: "/fonts/:font*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, immutable, max-age=31536000"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
