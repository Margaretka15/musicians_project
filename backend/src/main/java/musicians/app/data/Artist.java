package musicians.app.data;

import java.util.List;

public record Artist(String id, String name, String description, String lastname, String mainInstrument,
                     List<String> otherInstruments, String localisation) {

}
