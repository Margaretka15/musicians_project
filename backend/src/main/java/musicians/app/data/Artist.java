package musicians.app.data;

import java.util.List;

public record Artist(String id, String name, String lastname, String description, String mainInstrument,
                     List<String> otherInstruments, String localisation) {

}
