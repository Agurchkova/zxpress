import "./ColumnSearch.css";
import { Link } from "react-router-dom";
import dash from "../../images/dash.png";

function ColumnSearch() {
  return (
    <div className="content__column-search">
      <form className="content__form">
        <label>
          <input
            className="content__input"
            name="search"
            type="text"
            placeholder="Поиск..."
          />
        </label>
      </form>
      <div className="content__dash">
        <img className="content__dash-image-short" src={dash} alt="dash" />
      </div>
      <div className="content__themes">
        Темы:
        <Link className="content__theme-link link-hover"> Игры, </Link>
        <Link className="content__theme-link link-hover">
          Программное обеспечение,{" "}
        </Link>
        <Link className="content__theme-link link-hover">Пресса, </Link>
        <Link className="content__theme-link link-hover">
          Аппаратное обеспечение,{" "}
        </Link>
        <Link className="content__theme-link link-hover">Сеть, </Link>
        <Link className="content__theme-link link-hover">Демосцена, </Link>
        <Link className="content__theme-link link-hover">Люди, </Link>
        <Link className="content__theme-link link-hover">Программирование</Link>
      </div>
      <div className="content__dash">
        <img className="content__dash-image-short" src={dash} alt="dash" />
      </div>
      <ul className="content__similar-articles">
        Похожие статьи:
        <li className="content__article">
          <Link className="content__article-link link-hover">
            {/* временно для верстки */}
            <span className="content__article-span">IS-DOS </span>- "IS-DOS -
            начинающим" No 3
          </Link>
        </li>
        <li className="content__article">
          <Link className="content__article-link link-hover">
            <span className="content__article-span">Открытие - </span>{" "}
            Электронный офис - концепция WANG Freestyle-Handset.
          </Link>
        </li>
        <li className="content__article">
          <Link className="content__article-link link-hover">
            <span className="content__article-span">Хоббит - </span>
            прохождение Адвентюрной игры "Хоббит, или Путешествие туда и
            обратно".
          </Link>
        </li>
        <li className="content__article">
          <Link className="content__article-link link-hover">
            <span className="content__article-span">Программирование - </span>
            Качественная процедура конверсия ZX картинки в ASCII.
          </Link>
        </li>
        <li className="content__article">
          <Link className="content__article-link link-hover">
            <span className="content__article-span">Реклама - </span>о начале
            подготовки к выходу в свет литературно-художественного журнала в
            среде IS-DOS "ФАНТАДРОМ"
          </Link>
        </li>
      </ul>
      <div className="content__dash">
        <img className="content__dash-image-short" src={dash} alt="dash" />
      </div>
      <div className="content__this-day">
        В этот день...&nbsp; {new Date().getDate()} августа
        {/* {new Date().getMonth("ru")} как месяц прописать? */}
        <div className="content__city">
          <Link className="content__city-link link-hover">
            ACNews #22, {/* временно для верстки */}
          </Link>
          <Link className="content__city-link link-hover">Full Pull #08, </Link>
          <Link className="content__city-link link-hover">Plutonium #19, </Link>
          <Link className="content__city-link link-hover">KrNews #10, </Link>
          <Link className="content__city-link link-hover">Nicron #49, </Link>
          <Link className="content__city-link link-hover">Nicron #48</Link>
        </div>
      </div>
      <div className="content__dash">
        <img className="content__dash-image-short" src={dash} alt="dash" />
      </div>
      <form className="content__form">
        <select class="content__form-select" name="id">
          <option selected="">Выбрать издание...</option>
          <option value="1">#Z80</option>
          <option value="2">20</option>
          <option value="3">200</option>
          <option value="4">3Bit</option>
          <option value="5">47th Byte</option>
          <option value="7">Acid Paper</option>
          <option value="8">ACNews</option>
          <option value="9">Adventurer</option>
          <option value="10">All Paper</option>
          <option value="11">Always</option>
          <option value="12">Amazing</option>
          <option value="13">Amiga Info</option>
          <option value="14">Amiga News</option>
          <option value="306">Amiga News</option>
          <option value="15">Amigoz</option>
          <option value="325">Anecdotes</option>
          <option value="16">Anigdot</option>
          <option value="17">Anti-Top</option>
          <option value="18">Antivel</option>
          <option value="19">Aspect</option>
          <option value="20">Avro News</option>
          <option value="21">Balagan</option>
          <option value="22">Baltic Press</option>
          <option value="23">Batva</option>
          <option value="24">BBSTOP</option>
          <option value="25">Best of</option>
          <option value="26">Black Crow</option>
          <option value="27">Black Metall</option>
          <option value="28">Body</option>
          <option value="29">Bonus</option>
          <option value="30">Book</option>
          <option value="31">Born Dead</option>
          <option value="32">Bred</option>
          <option value="305">Bred</option>
          <option value="33">Breeze</option>
          <option value="34">Bugs</option>
          <option value="35">Buhenvald</option>
          <option value="307">Burn the Linkghter</option>
          <option value="36">Buzz</option>
          <option value="47">C-Net Week</option>
          <option value="338">cafe photo album</option>
          <option value="337">CAFe'2003</option>
          <option value="37">Cancer</option>
          <option value="38">Chaos</option>
          <option value="39">Cheat</option>
          <option value="40">Chudo</option>
          <option value="41">City</option>
          <option value="42">City</option>
          <option value="43">CLinkme</option>
          <option value="309">Codemania</option>
          <option value="44">Cossackos</option>
          <option value="308">Crazy News</option>
          <option value="45">Crossroads</option>
          <option value="46">Crystal Dream</option>
          <option value="48">Cyberman</option>
          <option value="49">CyberSex</option>
          <option value="331">Default</option>
          <option value="50">Deja Vu</option>
          <option value="51">Demo or Die</option>
          <option value="52">Depress</option>
          <option value="53">Depth</option>
          <option value="54">Dermo</option>
          <option value="55">Di Halt</option>
          <option value="57">Dni-Pro</option>
          <option value="56">Dnieprobite</option>
          <option value="58">DonNews</option>
          <option value="59">Dr. Longman`s News</option>
          <option value="60">Du Hast</option>
          <option value="61">Dune</option>
          <option value="62">Ebelka</option>
          <option value="63">Echo</option>
          <option value="64">Eldorado</option>
          <option value="330">Electra</option>
          <option value="65">EMSlog</option>
          <option value="66">Emulate</option>
          <option value="67">Energy</option>
          <option value="324">Enigma Tape Magazine</option>
          <option value="68">Erotic</option>
          <option value="69">Explorer</option>
          <option value="81">F-Net</option>
          <option value="70">Fanat</option>
          <option value="71">Fanat Newspaper</option>
          <option value="72">Fantadrom</option>
          <option value="73">Fantastic</option>
          <option value="328">Fantasy</option>
          <option value="74">Fantik</option>
          <option value="75">Fantom</option>
          <option value="76">Faultless</option>
          <option value="77">Fenzin</option>
          <option value="78">Fisherman Press</option>
          <option value="79">Flash Info</option>
          <option value="80">Flash Time</option>
          <option value="82">FooLinkshness</option>
          <option value="83">Forever Young</option>
          <option value="84">Fuck</option>
          <option value="85">Full Pull</option>
          <option value="86">Funeral</option>
          <option value="87">Funny Box</option>
          <option value="88">Funny Night</option>
          <option value="340">Gamergy</option>
          <option value="89">Generation Z</option>
          <option value="90">Gluk</option>
          <option value="329">GMS News</option>
          <option value="91">Gomel ZX-Net News</option>
          <option value="92">Gorodok</option>
          <option value="93">Gothiq</option>
          <option value="94">Hacker</option>
          <option value="95">Heresy</option>
          <option value="96">Hobby</option>
          <option value="332">Hooy Mag</option>
          <option value="97">Horror</option>
          <option value="98">Humor in Exchange</option>
          <option value="99">Impulse</option>
          <option value="100">Inferno</option>
          <option value="302">Info Guide</option>
          <option value="101">Innovision</option>
          <option value="102">Insanity</option>
          <option value="103">IzhNews</option>
          <option value="104">Joint</option>
          <option value="105">Key</option>
          <option value="342">KiiA Info</option>
          <option value="106">Kosme</option>
          <option value="107">KrNews</option>
          <option value="108">Lamergy</option>
          <option value="109">Last 128</option>
          <option value="110">Linkfe</option>
          <option value="111">Linkme Tree</option>
          <option value="112">Linkstok</option>
          <option value="113">LntNews</option>
          <option value="114">Lprint</option>
          <option value="115">Madness</option>
          <option value="116">Marazm</option>
          <option value="117">Mask</option>
          <option value="323">Mask</option>
          <option value="333">Matrix</option>
          <option value="322">Max Pictures Sexual News</option>
          <option value="118">Maximum</option>
          <option value="119">Melancholy</option>
          <option value="120">Micro</option>
          <option value="121">Millenium</option>
          <option value="122">Miracle</option>
          <option value="123">Mirage</option>
          <option value="124">Mirikom</option>
          <option value="125">Modern</option>
          <option value="126">Move</option>
          <option value="127">MSD</option>
          <option value="128">MSF</option>
          <option value="129">Muchomor</option>
          <option value="130">Murzilka</option>
          <option value="131">Mustang</option>
          <option value="132">My Speccy</option>
          <option value="133">Natural</option>
          <option value="134">Neformal</option>
          <option value="135">NemoFAQ</option>
          <option value="136">Netus News</option>
          <option value="137">Never Mind</option>
          <option value="138">Next</option>
          <option value="139">Nicron</option>
          <option value="140">Nikfe</option>
          <option value="319">Nonsense</option>
          <option value="141">Noosfera</option>
          <option value="142">Numberology</option>
          <option value="143">Oberon</option>
          <option value="144">Odyssey Magazine</option>
          <option value="145">Odyssey paper</option>
          <option value="146">OffLinkne</option>
          <option value="147">On-Linkne</option>
          <option value="299">Open Letters</option>
          <option value="301">Opex</option>
          <option value="148">Opium</option>
          <option value="149">Optron</option>
          <option value="150">Orion</option>
          <option value="151">Orphan</option>
          <option value="152">Ostrov</option>
          <option value="153">Out Side</option>
          <option value="314">Outlet</option>
          <option value="154">Overlog</option>
          <option value="155">Paradox</option>
          <option value="156">Pioneer</option>
          <option value="157">Platinum</option>
          <option value="158">Playboy</option>
          <option value="159">Plutonium</option>
          <option value="160">Point</option>
          <option value="334">Pointovka Report</option>
          <option value="161">Polesse</option>
          <option value="162">Polnoch</option>
          <option value="163">Power</option>
          <option value="317">Prikoly</option>
          <option value="164">Profi Club</option>
          <option value="165">Promised Land</option>
          <option value="166">Proton</option>
          <option value="167">Psychoz</option>
          <option value="168">PubLinkc Spirit</option>
          <option value="169">Punk</option>
          <option value="170">Read Me</option>
          <option value="171">Realtime</option>
          <option value="321">Red Press</option>
          <option value="172">Reflex</option>
          <option value="173">Review</option>
          <option value="174">Revival</option>
          <option value="175">RIP</option>
          <option value="176">RST</option>
          <option value="177">Rumorz</option>
          <option value="178">RUSH</option>
          <option value="316">Sapog</option>
          <option value="180">Scene News</option>
          <option value="315">Scene+</option>
          <option value="181">Scenergy</option>
          <option value="182">Scream</option>
          <option value="326">Screamergy</option>
          <option value="183">Scroller</option>
          <option value="184">Setevoy Sokol</option>
          <option value="185">Shock</option>
          <option value="186">Shocker</option>
          <option value="187">Shupashkar</option>
          <option value="339">SibNews</option>
          <option value="188">Sinc Re-Stared</option>
          <option value="313">Sinclair Classic</option>
          <option value="189">Sinclair Club</option>
          <option value="190">Sinclair News</option>
          <option value="191">Sinclair Town</option>
          <option value="192">Skimer</option>
          <option value="193">Sky Net</option>
          <option value="194">Smeh</option>
          <option value="195">Sorrow News</option>
          <option value="196">SOSG</option>
          <option value="197">SPb ZX Week</option>
          <option value="198">SPbZXNet-Pointovka</option>
          <option value="199">Speccy</option>
          <option value="200">Speccy Linkfe</option>
          <option value="201">SpecInfo</option>
          <option value="202">Spectrofon</option>
          <option value="300">Spectrofun</option>
          <option value="203">Spectron</option>
          <option value="204">Spectrophoby</option>
          <option value="205">Spectrum Expert</option>
          <option value="206">Spectrum Land</option>
          <option value="312">Spectrum Magazine</option>
          <option value="207">Spectrum News</option>
          <option value="208">Spectrum Progress</option>
          <option value="209">Spectrumania</option>
          <option value="210">Spite</option>
          <option value="211">Star</option>
          <option value="212">Stump</option>
          <option value="213">SubLinkminal Extacy</option>
          <option value="214">Sweet</option>
          <option value="215">Tagan News</option>
          <option value="216">Tales from Crypt</option>
          <option value="217">TargeT</option>
          <option value="218">Teleconf. ZX-Net</option>
          <option value="219">Teleshow</option>
          <option value="220">Terminal</option>
          <option value="221">Think</option>
          <option value="222">Time</option>
          <option value="223">Times</option>
          <option value="224">Totoro</option>
          <option value="225">Tusovka</option>
          <option value="226">Tusovka</option>
          <option value="227">Ufo</option>
          <option value="228">Ultimathum</option>
          <option value="229">Unsteady News</option>
          <option value="230">Virtual World</option>
          <option value="231">Virtual Worlds</option>
          <option value="232">Voxon`s Land</option>
          <option value="233">Voyager</option>
          <option value="234">Wallpaper</option>
          <option value="235">Warez</option>
          <option value="236">WeekEnd</option>
          <option value="237">Welcome Press</option>
          <option value="238">White Crow</option>
          <option value="239">Wizard Net Page</option>
          <option value="240">Wizard News</option>
          <option value="341">Woot!</option>
          <option value="241">World in the Web</option>
          <option value="243">X-Files</option>
          <option value="244">X-Files</option>
          <option value="311">X-Magazine</option>
          <option value="245">X-Ray</option>
          <option value="242">Xa-XaFon</option>
          <option value="246">Za Rulem</option>
          <option value="247">Zed</option>
          <option value="248">Zodiac</option>
          <option value="249">ZX Chart</option>
          <option value="250">ZX City</option>
          <option value="251">ZX Club</option>
          <option value="252">ZX Digest</option>
          <option value="253">ZX Doze</option>
          <option value="254">ZX Element</option>
          <option value="255">ZX Ferrum</option>
          <option value="256">ZX Football 2000</option>
          <option value="257">ZX Format</option>
          <option value="258">ZX Forum</option>
          <option value="259">ZX Guide</option>
          <option value="260">ZX Hard</option>
          <option value="261">ZX Healthless</option>
          <option value="262">ZX Humor</option>
          <option value="263">ZX Jump</option>
          <option value="264">ZX Konig</option>
          <option value="303">ZX Land</option>
          <option value="265">ZX Linkght</option>
          <option value="266">ZX Linkve</option>
          <option value="268">ZX Magazine</option>
          <option value="267">ZX Magazine</option>
          <option value="270">ZX News</option>
          <option value="271">ZX Panorama</option>
          <option value="272">ZX Paper</option>
          <option value="273">ZX Park</option>
          <option value="274">ZX Pilot</option>
          <option value="275">ZX Power</option>
          <option value="276">ZX Press</option>
          <option value="277">ZX Review</option>
          <option value="327">ZX Revija</option>
          <option value="278">ZX Rulez Magazine</option>
          <option value="279">ZX Software</option>
          <option value="280">ZX Time</option>
          <option value="281">ZX User</option>
          <option value="282">ZX World</option>
          <option value="283">ZX Zone</option>
          <option value="310">ZX-Files</option>
          <option value="269">ZX-News</option>
          <option value="336">Возрождение</option>
        </select>
      </form>
    </div>
  );
}
export default ColumnSearch;
