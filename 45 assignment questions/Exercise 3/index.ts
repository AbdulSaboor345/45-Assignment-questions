let userName: string = "Abdul Saboor";

console.log("Lowercase:", userName.toLowerCase());
console.log("Uppercase:", userName.toUpperCase());
console.log("Titlecase:", userName.replace(/\b\w/g, char => char.toUpperCase()) );
