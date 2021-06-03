import StyledWrapper from './About.styles';

const About = () => (
  <StyledWrapper>
    <img src="/images/portrait.jpg" alt="mój portret" className="portrait" />
    <div className="text-container">
      <h2>Poznajmy się!</h2>
      <p>
        Mam na imię Kasia. Dwa lata temu zamieszkałam z rodziną pod puszczą, z
        dala od zgiełku miasta w wymarzonym domu z ogrodem. Wtedy to
        rozpoczęliśmy magiczną podróż do zaczarowanego świata natury, zwierząt
        leśnych, prastarych drzew - pełnego spokoju i harmonii. Strumień
        niezwykłych doświadczeń, jakie płyną z obcowania z naturą, wskazał mi
        zupełnie nowy wymiar rzeczywistości. Dwudziestoletnie doświadczenie
        pracy z drugim człowiekiem, zamiłowanie do psychologii, naturoterapii,
        ajurwedy, a w końcu ukończenie studiów w tychże obszarach domyka we mnie
        przekonanie, że człowiek nie jest częścią natury. On jest naturą!
        Poszukuje szczęścia, lecz często nie tam, gdzie ono jest - w świecie
        zewnętrznym, zdala od źródła.
        <br />
        <br />
        Zapraszam Cię do niezwykłej podróży, w głąb natury. Kiedy już tam
        zajrzysz, spotkasz siebie. Zauważysz, że jesteś jak to drzewo, ten liść,
        ta sarna. Wszystko jest połączone, a przyroda pragnie podzielić się z
        Tobą swym obfitym bogactwem, jeśli tylko jej na to pozwolisz.
      </p>
    </div>
  </StyledWrapper>
);

export default About;
