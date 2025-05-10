





async function getdata() {
    const url ="http://20.244.56.144/evaluation-service/stocks"
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODY5MjY4LCJpYXQiOjE3NDY4Njg5NjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjMyYmZmNGI3LWFiMGYtNDQ2NS04NDgwLWIwYzE5OTljMDJhMiIsInN1YiI6IjIyazAxLmFpZGVuQHNqZWMuYWMuaW4ifSwiZW1haWwiOiIyMmswMS5haWRlbkBzamVjLmFjLmluIiwibmFtZSI6ImFpZGVuIHNoYXVuIG1lbmV6ZXMiLCJyb2xsTm8iOiI0c28yMmNiMDAzIiwiYWNjZXNzQ29kZSI6IktqSkF4UCIsImNsaWVudElEIjoiMzJiZmY0YjctYWIwZi00NDY1LTg0ODAtYjBjMTk5OWMwMmEyIiwiY2xpZW50U2VjcmV0IjoiZ01ianpZcW5aWnZqVXB6diJ9.rMAYrsMEIBatBnhpiiTFwEke7zzpkWq3b_RjjedTEzw',
            'Accept': 'application/json',
        },
    }
    );
    if (!response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
    }
}
