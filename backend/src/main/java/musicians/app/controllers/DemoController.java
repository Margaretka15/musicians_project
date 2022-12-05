package musicians.app.controllers;

import musicians.app.data.Artist;
import musicians.app.data.Person;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DemoController {
    @GetMapping("/hello")
    public Person hello(@RequestParam(value = "name", defaultValue = "World") String name) {
//        return String.format("Hello %s!", name);
        return new Person("Ania", "Kowalska");
    }

    @GetMapping("/artists")
    public List<Artist> artists() {
//        return String.format("Hello %s!", name);
        List<Artist> artists = new ArrayList<>();

        artists.add(new Artist("a01",
                "Joanna",
                "Gram na ślubach od 8 lat. W repertuarze Ave Maria xd",
                "Kruczek",
                "flet",
                Arrays.asList("harp", "piano"),
                "Kraków"));
        artists.add(new Artist("a02",
                "Kamil",
                "Nowak",
                "Jestem z wykształcenia organistą. Z radością uświetnię Państwa uroczystości.",
                "pianino",
                Arrays.asList("śpiew", "organy"),
                "Wadowice"));
        artists.add(new Artist("a03",
                "Ania",
                "Kowalska",
                "Specjalność: jazz. Szukam fajnych ludzi do wspólnego grania.",
                "śpiew",
                Arrays.asList("skrzypce"),
                "Wadowice"));

        return artists;
    }
}
