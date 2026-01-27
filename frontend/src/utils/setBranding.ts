const setBranding = (title: string, icon: string) => {
  document.title = title;

  let link: HTMLLinkElement | null =
    document.querySelector("link[rel~='icon']");

  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }

  link.href = icon;
};

export { setBranding };
