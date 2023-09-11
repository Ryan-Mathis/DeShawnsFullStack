using DeShawnsFullStack.Models;

var builder = WebApplication.CreateBuilder(args);

List<Dog> dogs = new List<Dog>
{
    new Dog()
    {
        Id = 1,
        Name = "Ludo",
        WalkerId = 3,
        CityId = 2
    },
    new Dog()
    {
        Id = 2,
        Name = "Spot",
        WalkerId = 1,
        CityId = 3
    },
    new Dog()
    {
        Id = 3,
        Name = "Rover",
        WalkerId = 2,
        CityId = 1
    }
};
List<Walker> walkers = new List<Walker>
{
    new Walker()
    {
        Id = 1,
        Name = "Jim",
    },
    new Walker()
    {
        Id = 2,
        Name = "Bob",
    },
    new Walker()
    {
        Id = 3,
        Name = "Joel",
    }
};
List<City> cities = new List<City>
{
    new City()
    {
        Id = 1,
        Name = "Nashville",
    },
    new City()
    {
        Id = 2,
        Name = "Hermitage",
    },
    new City()
    {
        Id = 3,
        Name = "Mount Juliet",
    }
};

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () =>
{
    return dogs;
});

app.MapGet("/api/dogs/{id}", (int id) => 
{
    Dog chosenDog = dogs.FirstOrDefault(d => d.Id == id);
    if (chosenDog == null)
    {
        return Results.NotFound();
    }
    
    chosenDog.Walker = walkers.FirstOrDefault(w => w.Id == chosenDog.WalkerId);
    chosenDog.City = cities.FirstOrDefault(c => c.Id == chosenDog.CityId);

    return Results.Ok(chosenDog);    
});

app.MapGet("/api/walkers", () => {
    return walkers;
});

app.MapGet("/api/cities", () => {
    return cities;
});

app.MapPost("/api/dogs", (Dog dog) => {
    dog.Id = dogs.Count > 0 ?dogs.Max(d => d.Id) + 1 : 1;
    dog.Walker = walkers.FirstOrDefault(w => w.Id == dog.WalkerId);
    dog.City = cities.FirstOrDefault(c => c.Id == dog.CityId);
    dogs.Add(dog);
    return dog;
});

app.Run();
