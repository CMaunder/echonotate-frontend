import React, { Component } from 'react';
import { OpenSheetMusicDisplay as OSMD } from 'opensheetmusicdisplay';

const filexml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\
<score-partwise version="3.1">\
    <identification>\
        <encoding>\
            <software>Finale v25 for Mac</software>\
            <encoding-date>2017-12-15</encoding-date>\
            <supports attribute="new-system" element="print" type="yes" value="yes"/>\
            <supports attribute="new-page" element="print" type="yes" value="yes"/>\
            <supports element="accidental" type="yes"/>\
            <supports element="beam" type="yes"/>\
            <supports element="stem" type="yes"/>\
        </encoding>\
    </identification>\
    <defaults>\
        <scaling>\
            <millimeters>6.35</millimeters>\
            <tenths>40</tenths>\
        </scaling>\
        <page-layout>\
            <page-height>1760</page-height>\
            <page-width>1360</page-width>\
            <page-margins type="both">\
                <left-margin>80</left-margin>\
                <right-margin>80</right-margin>\
                <top-margin>80</top-margin>\
                <bottom-margin>80</bottom-margin>\
            </page-margins>\
        </page-layout>\
        <system-layout>\
            <system-margins>\
                <left-margin>0</left-margin>\
                <right-margin>0</right-margin>\
            </system-margins>\
            <system-distance>173</system-distance>\
            <top-system-distance>68</top-system-distance>\
        </system-layout>\
        <staff-layout>\
            <staff-distance>67</staff-distance>\
        </staff-layout>\
        <appearance>\
            <line-width type="stem">0.8333</line-width>\
            <line-width type="beam">5</line-width>\
            <line-width type="staff">1.25</line-width>\
            <line-width type="light barline">1.4583</line-width>\
            <line-width type="heavy barline">5</line-width>\
            <line-width type="leger">1.875</line-width>\
            <line-width type="ending">1.4583</line-width>\
            <line-width type="wedge">0.9375</line-width>\
            <line-width type="enclosure">1.4583</line-width>\
            <line-width type="tuplet bracket">1.4583</line-width>\
            <note-size type="grace">50</note-size>\
            <note-size type="cue">50</note-size>\
            <distance type="hyphen">60</distance>\
            <distance type="beam">8</distance>\
        </appearance>\
        <music-font font-family="Maestro,engraved" font-size="18"/>\
        <word-font font-family="Times New Roman" font-size="9"/>\
    </defaults>\
    <part-list>\
        <score-part id="P1">\
            <part-name print-object="no">Guitar</part-name>\
            <part-abbreviation print-object="no">Gtr.</part-abbreviation>\
            <score-instrument id="P1-I1">\
                <instrument-name>Acoustic Guitar (steel)</instrument-name>\
                <instrument-sound>pluck.guitar</instrument-sound>\
            </score-instrument>\
            <midi-instrument id="P1-I1">\
                <midi-channel>1</midi-channel>\
                <midi-program>26</midi-program>\
                <volume>80</volume>\
                <pan>0</pan>\
            </midi-instrument>\
        </score-part>\
        <score-part id="P2">\
            <part-name print-object="no">Guitar [TAB]</part-name>\
            <part-abbreviation print-object="no">Gtr.</part-abbreviation>\
        </score-part>\
    </part-list>\
    <!--=========================================================-->\
    <part id="P1">\
        <measure number="1" width="485">\
            <print>\
                <page-layout>\
                    <page-height>1760</page-height>\
                    <page-width>1360</page-width>\
                    <page-margins>\
                        <left-margin>80</left-margin>\
                        <right-margin>727</right-margin>\
                        <top-margin>80</top-margin>\
                        <bottom-margin>80</bottom-margin>\
                    </page-margins>\
                </page-layout>\
                <system-layout>\
                    <system-margins>\
                        <left-margin>68</left-margin>\
                        <right-margin>0</right-margin>\
                    </system-margins>\
                    <top-system-distance>187</top-system-distance>\
                </system-layout>\
                <measure-numbering>system</measure-numbering>\
            </print>\
            <attributes>\
                <divisions>2</divisions>\
                <key>\
                    <fifths>0</fifths>\
                    <mode>major</mode>\
                </key>\
                <time>\
                    <beats>4</beats>\
                    <beat-type>4</beat-type>\
                </time>\
                <clef>\
                    <sign>G</sign>\
                    <line>2</line>\
                </clef>\
                <transpose>\
                    <diatonic>0</diatonic>\
                    <chromatic>0</chromatic>\
                    <octave-change>-1</octave-change>\
                </transpose>\
            </attributes>\
            <sound tempo="120"/>\
            <note default-x=\"82\">\
            <pitch>\
                <step>C</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>D</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>E</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>F</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>G</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>A</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>B</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>C</step>\
                <octave>4</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>B</step>\
                <octave>4</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>A</step>\
                <octave>4</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>G</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>F</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>E</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>D</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        <note default-x=\"82\">\
            <pitch>\
                <step>C</step>\
                <octave>3</octave>\
            </pitch>\
            <duration>2</duration>\
            <voice>1</voice>\
            <type>eighth</type>\
            <stem default-y=\"-50.5\">down</stem>\
            <notations>\
                <slur number=\"1\" placement=\"above\" type=\"start\"/>\
            </notations>\
        </note>\
        </measure>\
    </part>\
    <!--=========================================================-->\
    <part id="P2">\
        <measure number="1" width="485">\
            <print>\
                <measure-numbering>none</measure-numbering>\
            </print>\
            <attributes>\
                <divisions>2</divisions>\
                <key print-object="no">\
                    <fifths>0</fifths>\
                    <mode>major</mode>\
                </key>\
                <clef>\
                    <sign>TAB</sign>\
                    <line>5</line>\
                </clef>\
                <staff-details>\
                    <staff-lines>6</staff-lines>\
                    <staff-tuning line="1">\
                        <tuning-step>E</tuning-step>\
                        <tuning-octave>2</tuning-octave>\
                    </staff-tuning>\
                    <staff-tuning line="2">\
                        <tuning-step>A</tuning-step>\
                        <tuning-octave>2</tuning-octave>\
                    </staff-tuning>\
                    <staff-tuning line="3">\
                        <tuning-step>D</tuning-step>\
                        <tuning-octave>3</tuning-octave>\
                    </staff-tuning>\
                    <staff-tuning line="4">\
                        <tuning-step>G</tuning-step>\
                        <tuning-octave>3</tuning-octave>\
                    </staff-tuning>\
                    <staff-tuning line="5">\
                        <tuning-step>B</tuning-step>\
                        <tuning-octave>3</tuning-octave>\
                    </staff-tuning>\
                    <staff-tuning line="6">\
                        <tuning-step>E</tuning-step>\
                        <tuning-octave>4</tuning-octave>\
                    </staff-tuning>\
                    <staff-size>167</staff-size>\
                </staff-details>\
            </attributes>\
            <sound tempo="120"/>\
            <note default-x="82">\
                <pitch>\
                    <step>C</step>\
                    <octave>4</octave>\
                </pitch>\
                <duration>2</duration>\
                <voice>1</voice>\
                <type>quarter</type>\
                <stem>none</stem>\
                <notations>\
                    <technical>\
                        <hammer-on number="1" type="start">H</hammer-on>\
                        <string>3</string>\
                        <fret>5</fret>\
                    </technical>\
                    <slur bezier-x="18" bezier-y="28" default-x="5" default-y="-21" number="1" placement="above" type="start"/>\
                </notations>\
            </note>\
            <note default-x="177">\
                <pitch>\
                    <step>D</step>\
                    <octave>4</octave>\
                </pitch>\
                <duration>2</duration>\
                <voice>1</voice>\
                <type>quarter</type>\
                <stem>none</stem>\
                <notations>\
                    <technical>\
                        <hammer-on number="1" type="stop"/>\
                        <string>3</string>\
                        <fret>7</fret>\
                    </technical>\
                    <slur bezier-x="-18" bezier-y="27" default-x="5" default-y="-22" number="1" type="stop"/>\
                </notations>\
            </note>\
            <note default-x="272">\
                <pitch>\
                    <step>E</step>\
                    <alter>-1</alter>\
                    <octave>4</octave>\
                </pitch>\
                <duration>1</duration>\
                <voice>1</voice>\
                <type>eighth</type>\
                <stem>none</stem>\
                <notations>\
                    <technical>\
                        <pull-off number="1" type="start">P</pull-off>\
                        <string>3</string>\
                        <fret>8</fret>\
                    </technical>\
                    <slur bezier-x="21" bezier-y="25" default-x="5" default-y="-21" number="1" placement="above" type="start"/>\
                </notations>\
            </note>\
            <note default-x="330">\
                <pitch>\
                    <step>D</step>\
                    <octave>4</octave>\
                </pitch>\
                <duration>1</duration>\
                <voice>1</voice>\
                <type>eighth</type>\
                <stem>none</stem>\
                <notations>\
                    <technical>\
                        <pull-off number="1" type="stop"/>\
                        <pull-off number="1" type="start">P</pull-off>\
                        <string>3</string>\
                        <fret>7</fret>\
                    </technical>\
                </notations>\
            </note>\
            <note default-x="389">\
                <pitch>\
                    <step>C</step>\
                    <octave>4</octave>\
                </pitch>\
                <duration>2</duration>\
                <voice>1</voice>\
                <type>quarter</type>\
                <stem>none</stem>\
                <notations>\
                    <technical>\
                        <pull-off number="1" type="stop"/>\
                        <string>3</string>\
                        <fret>5</fret>\
                    </technical>\
                    <slur bezier-x="-22" bezier-y="26" default-x="4" default-y="-21" number="1" type="stop"/>\
                </notations>\
            </note>\
        </measure>\
    </part>\
    <!--=========================================================--> \
</score-partwise>'

class OpenSheetMusicDisplay extends Component {
    constructor(props) {
      super(props);
      this.state = { dataReady: false };
      this.osmd = undefined;
      this.divRef = React.createRef();
    }
  
    setupOsmd() {
      const options = {
        autoResize: this.props.autoResize !== undefined ? this.props.autoResize : true,
        drawTitle: this.props.drawTitle !== undefined ? this.props.drawTitle : false,
      }
      this.osmd = new OSMD(this.divRef.current, options);
      this.osmd.load(this.props.file).then(() => this.osmd.render());
    }
  
    resize() {
      this.forceUpdate();
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.drawTitle !== prevProps.drawTitle) {
        this.setupOsmd();
      } else {
        this.osmd.load(this.props.file).then(() => this.osmd.render());
      }
      window.addEventListener('resize', this.resize)
    }
  
    // Called after render
    componentDidMount() {
      this.setupOsmd();
    }
  
    render() {
      return (<div ref={this.divRef} />);
    }
  }

  export default OpenSheetMusicDisplay;