function loadScript(url: string) {
    let scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', url);
    scriptTag.setAttribute('crossorigin', "true");
    document.head.appendChild(scriptTag);
}

export {loadScript}
