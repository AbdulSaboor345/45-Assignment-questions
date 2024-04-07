var userName = "Abdul Saboor";
console.log("Lowercase:", userName.toLowerCase());
console.log("Uppercase:", userName.toUpperCase());
console.log("Titlecase:", userName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
