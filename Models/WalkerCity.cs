namespace DeShawnsFullStack.Models;
public class WalkerCity
{
    public int Id { get; set; }
    public int WalkerId { get; set; }
    public int CityId { get; set; }
    public List<Walker> Walkers { get; set; }
    public List<City> Cities { get; set; }
}