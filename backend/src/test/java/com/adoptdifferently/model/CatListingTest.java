package test.java.com.adoptdifferently.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.adoptdifferently.model.CatListing;

public class CatListingTest {
    private CatListing catListing;

    @BeforeEach
    public void setup() {
        catListing = new CatListing(1, 123, "Fluffy", "Persian", 3, "New York", "A fluffy and adorable cat");
    }

    @Test
    public void testGetters() {
        long id = catListing.getId();
        long ownerId = catListing.getOwnerId();
        String name = catListing.getName();
        String breed = catListing.getBreed();
        int age = catListing.getAge();
        String location = catListing.getLocation();
        String description = catListing.getDescription();

        assertEquals(1, id);
        assertEquals(123, ownerId);
        assertEquals("Fluffy", name);
        assertEquals("Persian", breed);
        assertEquals(3, age);
        assertEquals("New York", location);
        assertEquals("A fluffy and adorable cat", description);
    }

    @Test
    public void testToString() {
        String result = catListing.toString();

        String expected = "CatListing [id=1, ownerId=123, name=Fluffy, breed=Persian, age=3, location=New York, description=A fluffy and adorable cat]";
        assertEquals(expected, result);
    }


    

}
    

