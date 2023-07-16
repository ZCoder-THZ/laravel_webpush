self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = data.title;
    const options = {
        body: data.body,
        icon: data.icon,
        badge: data.badge,
        // Add more options as needed
    };
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Add any other service worker code as needed
