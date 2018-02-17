// Generated from BVH.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BVHListener = require('./BVHListener').BVHListener;
var grammarFileName = "BVH.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0011\u011a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0007\u0002&\n",
    "\u0002\f\u0002\u000e\u0002)\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002.\n\u0002\f\u0002\u000e\u00021\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003;\n\u0003\f\u0003\u000e\u0003>\u000b\u0003\u0003",
    "\u0004\u0007\u0004A\n\u0004\f\u0004\u000e\u0004D\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004H\n\u0004\f\u0004\u000e\u0004K\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004O\n\u0004\f\u0004\u000e\u0004R\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004W\n\u0004\f\u0004\u000e",
    "\u0004Z\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0007\u0006b\n\u0006\f\u0006\u000e\u0006e\u000b",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006i\n\u0006\f\u0006\u000e\u0006",
    "l\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0007\u0007s\n\u0007\f\u0007\u000e\u0007v\u000b\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007z\n\u0007\f\u0007\u000e\u0007}\u000b\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007\u0081\n\u0007\f\u0007\u000e\u0007\u0084",
    "\u000b\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0088\n\u0007\f\u0007",
    "\u000e\u0007\u008b\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0007\t\u0093\n\t\f\t\u000e\t\u0096\u000b\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0007\t\u009c\n\t\f\t\u000e\t\u009f\u000b",
    "\t\u0003\t\u0007\t\u00a2\n\t\f\t\u000e\t\u00a5\u000b\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u00ae\n\u000b\f\u000b\u000e\u000b\u00b1\u000b\u000b\u0003\f\u0003",
    "\f\u0005\f\u00b5\n\f\u0003\r\u0007\r\u00b8\n\r\f\r\u000e\r\u00bb\u000b",
    "\r\u0003\r\u0003\r\u0007\r\u00bf\n\r\f\r\u000e\r\u00c2\u000b\r\u0003",
    "\r\u0003\r\u0007\r\u00c6\n\r\f\r\u000e\r\u00c9\u000b\r\u0003\r\u0003",
    "\r\u0003\r\u0007\r\u00ce\n\r\f\r\u000e\r\u00d1\u000b\r\u0003\r\u0003",
    "\r\u0003\u000e\u0007\u000e\u00d6\n\u000e\f\u000e\u000e\u000e\u00d9\u000b",
    "\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00dd\n\u000e\f\u000e\u000e",
    "\u000e\u00e0\u000b\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00e4\n",
    "\u000e\f\u000e\u000e\u000e\u00e7\u000b\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u00eb\n\u000e\f\u000e\u000e\u000e\u00ee\u000b\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0007\u000f\u00f3\n\u000f\f\u000f\u000e",
    "\u000f\u00f6\u000b\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00fa\n",
    "\u000f\f\u000f\u000e\u000f\u00fd\u000b\u000f\u0003\u000f\u0003\u000f",
    "\u0007\u000f\u0101\n\u000f\f\u000f\u000e\u000f\u0104\u000b\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u0108\n\u000f\f\u000f\u000e\u000f\u010b",
    "\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0007\u0012\u0115\n\u0012\f\u0012",
    "\u000e\u0012\u0118\u000b\u0012\u0003\u0012\u0003\u0116\u0005\u0004\u0010",
    "\u0014\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"\u0002\u0002\u0127\u0002\'\u0003\u0002\u0002\u0002",
    "\u00045\u0003\u0002\u0002\u0002\u0006B\u0003\u0002\u0002\u0002\b]\u0003",
    "\u0002\u0002\u0002\n_\u0003\u0002\u0002\u0002\ft\u0003\u0002\u0002\u0002",
    "\u000e\u008e\u0003\u0002\u0002\u0002\u0010\u0090\u0003\u0002\u0002\u0002",
    "\u0012\u00a6\u0003\u0002\u0002\u0002\u0014\u00a8\u0003\u0002\u0002\u0002",
    "\u0016\u00b4\u0003\u0002\u0002\u0002\u0018\u00b9\u0003\u0002\u0002\u0002",
    "\u001a\u00d7\u0003\u0002\u0002\u0002\u001c\u00f4\u0003\u0002\u0002\u0002",
    "\u001e\u010f\u0003\u0002\u0002\u0002 \u0111\u0003\u0002\u0002\u0002",
    "\"\u0116\u0003\u0002\u0002\u0002$&\u0007\u0011\u0002\u0002%$\u0003\u0002",
    "\u0002\u0002&)\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'",
    "(\u0003\u0002\u0002\u0002(*\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002",
    "\u0002*+\u0007\u0003\u0002\u0002+/\u0005\u0004\u0003\u0002,.\u0007\u0011",
    "\u0002\u0002-,\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u000202\u0003\u0002\u0002\u0002",
    "1/\u0003\u0002\u0002\u000223\u0007\u0004\u0002\u000234\u0005\u001c\u000f",
    "\u00024\u0003\u0003\u0002\u0002\u000256\b\u0003\u0001\u000267\u0005",
    "\u0006\u0004\u00027<\u0003\u0002\u0002\u000289\f\u0004\u0002\u00029",
    ";\u0005\u0006\u0004\u0002:8\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=\u0005\u0003",
    "\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?A\u0007\u0011\u0002\u0002",
    "@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002",
    "\u0002BC\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002EI\u0007\u0005\u0002\u0002FH\u0007\u0011\u0002\u0002GF\u0003",
    "\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002",
    "IJ\u0003\u0002\u0002\u0002JL\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002",
    "\u0002LP\u0005\b\u0005\u0002MO\u0007\u0011\u0002\u0002NM\u0003\u0002",
    "\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "ST\u0007\u0006\u0002\u0002TX\u0005\n\u0006\u0002UW\u0007\u0011\u0002",
    "\u0002VU\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002",
    "\u0002\u0002XY\u0003\u0002\u0002\u0002Y[\u0003\u0002\u0002\u0002ZX\u0003",
    "\u0002\u0002\u0002[\\\u0007\u0007\u0002\u0002\\\u0007\u0003\u0002\u0002",
    "\u0002]^\u0007\u000f\u0002\u0002^\t\u0003\u0002\u0002\u0002_c\u0005",
    "\f\u0007\u0002`b\u0007\u0011\u0002\u0002a`\u0003\u0002\u0002\u0002b",
    "e\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002",
    "\u0002df\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002fj\u0007\b",
    "\u0002\u0002gi\u0007\u0011\u0002\u0002hg\u0003\u0002\u0002\u0002il\u0003",
    "\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002",
    "km\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002mn\u0007\u000e\u0002",
    "\u0002no\u0005\u0010\t\u0002op\u0005\u0014\u000b\u0002p\u000b\u0003",
    "\u0002\u0002\u0002qs\u0007\u0011\u0002\u0002rq\u0003\u0002\u0002\u0002",
    "sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002w{\u0007\t",
    "\u0002\u0002xz\u0007\u0011\u0002\u0002yx\u0003\u0002\u0002\u0002z}\u0003",
    "\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002",
    "|~\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0082\u0005\u000e",
    "\b\u0002\u007f\u0081\u0007\u0011\u0002\u0002\u0080\u007f\u0003\u0002",
    "\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0085\u0003\u0002",
    "\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085\u0089\u0005\u000e",
    "\b\u0002\u0086\u0088\u0007\u0011\u0002\u0002\u0087\u0086\u0003\u0002",
    "\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003\u0002",
    "\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u008d\u0005\u000e",
    "\b\u0002\u008d\r\u0003\u0002\u0002\u0002\u008e\u008f\u0007\u000e\u0002",
    "\u0002\u008f\u000f\u0003\u0002\u0002\u0002\u0090\u0094\b\t\u0001\u0002",
    "\u0091\u0093\u0007\u0011\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002",
    "\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0097\u0003\u0002\u0002\u0002",
    "\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u0098\u0005\u0012\n\u0002",
    "\u0098\u00a3\u0003\u0002\u0002\u0002\u0099\u009d\f\u0004\u0002\u0002",
    "\u009a\u009c\u0007\u0011\u0002\u0002\u009b\u009a\u0003\u0002\u0002\u0002",
    "\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003\u0002\u0002\u0002",
    "\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a2\u0005\u0012\n\u0002",
    "\u00a1\u0099\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002",
    "\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002",
    "\u00a4\u0011\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002",
    "\u00a6\u00a7\u0007\u000f\u0002\u0002\u00a7\u0013\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\b\u000b\u0001\u0002\u00a9\u00aa\u0005\u0016\f\u0002\u00aa",
    "\u00af\u0003\u0002\u0002\u0002\u00ab\u00ac\f\u0004\u0002\u0002\u00ac",
    "\u00ae\u0005\u0016\f\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae",
    "\u00b1\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0003\u0002\u0002\u0002\u00b0\u0015\u0003\u0002\u0002\u0002\u00b1",
    "\u00af\u0003\u0002\u0002\u0002\u00b2\u00b5\u0005\u0018\r\u0002\u00b3",
    "\u00b5\u0005\u001a\u000e\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4",
    "\u00b3\u0003\u0002\u0002\u0002\u00b5\u0017\u0003\u0002\u0002\u0002\u00b6",
    "\u00b8\u0007\u0011\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8",
    "\u00bb\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9",
    "\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb",
    "\u00b9\u0003\u0002\u0002\u0002\u00bc\u00c0\u0007\n\u0002\u0002\u00bd",
    "\u00bf\u0007\u0011\u0002\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf",
    "\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2",
    "\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c7\u0005\b\u0005\u0002\u00c4",
    "\u00c6\u0007\u0011\u0002\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c6",
    "\u00c9\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0003\u0002\u0002\u0002\u00c8\u00ca\u0003\u0002\u0002\u0002\u00c9",
    "\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\u0006\u0002\u0002\u00cb",
    "\u00cf\u0005\n\u0006\u0002\u00cc\u00ce\u0007\u0011\u0002\u0002\u00cd",
    "\u00cc\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002\u00cf",
    "\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0",
    "\u00d2\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\u0007\u0007\u0002\u0002\u00d3\u0019\u0003\u0002\u0002\u0002\u00d4",
    "\u00d6\u0007\u0011\u0002\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d6",
    "\u00d9\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0003\u0002\u0002\u0002\u00d8\u00da\u0003\u0002\u0002\u0002\u00d9",
    "\u00d7\u0003\u0002\u0002\u0002\u00da\u00de\u0007\u000b\u0002\u0002\u00db",
    "\u00dd\u0007\u0011\u0002\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dd",
    "\u00e0\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0003\u0002\u0002\u0002\u00df\u00e1\u0003\u0002\u0002\u0002\u00e0",
    "\u00de\u0003\u0002\u0002\u0002\u00e1\u00e5\u0007\u0006\u0002\u0002\u00e2",
    "\u00e4\u0007\u0011\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4",
    "\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5",
    "\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7",
    "\u00e5\u0003\u0002\u0002\u0002\u00e8\u00ec\u0005\f\u0007\u0002\u00e9",
    "\u00eb\u0007\u0011\u0002\u0002\u00ea\u00e9\u0003\u0002\u0002\u0002\u00eb",
    "\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ef\u0003\u0002\u0002\u0002\u00ee",
    "\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007\u0007\u0002\u0002\u00f0",
    "\u001b\u0003\u0002\u0002\u0002\u00f1\u00f3\u0007\u0011\u0002\u0002\u00f2",
    "\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f6\u0003\u0002\u0002\u0002\u00f4",
    "\u00f2\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5",
    "\u00f7\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f7",
    "\u00fb\u0007\f\u0002\u0002\u00f8\u00fa\u0007\u0011\u0002\u0002\u00f9",
    "\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fd\u0003\u0002\u0002\u0002\u00fb",
    "\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc",
    "\u00fe\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe",
    "\u0102\u0005\u001e\u0010\u0002\u00ff\u0101\u0007\u0011\u0002\u0002\u0100",
    "\u00ff\u0003\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002\u0002\u0102",
    "\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103",
    "\u0105\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0105",
    "\u0109\u0007\r\u0002\u0002\u0106\u0108\u0007\u0011\u0002\u0002\u0107",
    "\u0106\u0003\u0002\u0002\u0002\u0108\u010b\u0003\u0002\u0002\u0002\u0109",
    "\u0107\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a",
    "\u010c\u0003\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c",
    "\u010d\u0005 \u0011\u0002\u010d\u010e\u0005\"\u0012\u0002\u010e\u001d",
    "\u0003\u0002\u0002\u0002\u010f\u0110\u0007\u000e\u0002\u0002\u0110\u001f",
    "\u0003\u0002\u0002\u0002\u0111\u0112\u0007\u000e\u0002\u0002\u0112!",
    "\u0003\u0002\u0002\u0002\u0113\u0115\u000b\u0002\u0002\u0002\u0114\u0113",
    "\u0003\u0002\u0002\u0002\u0115\u0118\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0003\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0117#",
    "\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002!\'/<BI",
    "PXcjt{\u0082\u0089\u0094\u009d\u00a3\u00af\u00b4\u00b9\u00c0\u00c7\u00cf",
    "\u00d7\u00de\u00e5\u00ec\u00f4\u00fb\u0102\u0109\u0116"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'HIERARCHY'", "'MOTION'", "'ROOT'", "'{'", 
                     "'}'", "'CHANNELS'", "'OFFSET'", "'JOINT'", "'End Site'", 
                     "'Frames:'", "'Frame Time:'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', "NUM", "ID", 
                      "COMMENT", "WS" ];

var ruleNames =  [ "mocap", "hierarchies", "rootSegment", "segmentID", "segmentBody", 
                   "offsets", "offset", "mchannels", "channel", "subSegments", 
                   "subSegment", "jointSegment", "endSite", "frames", "numFrames", 
                   "frameTime", "motionData" ];

function BVHParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BVHParser.prototype = Object.create(antlr4.Parser.prototype);
BVHParser.prototype.constructor = BVHParser;

Object.defineProperty(BVHParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BVHParser.EOF = antlr4.Token.EOF;
BVHParser.T__0 = 1;
BVHParser.T__1 = 2;
BVHParser.T__2 = 3;
BVHParser.T__3 = 4;
BVHParser.T__4 = 5;
BVHParser.T__5 = 6;
BVHParser.T__6 = 7;
BVHParser.T__7 = 8;
BVHParser.T__8 = 9;
BVHParser.T__9 = 10;
BVHParser.T__10 = 11;
BVHParser.NUM = 12;
BVHParser.ID = 13;
BVHParser.COMMENT = 14;
BVHParser.WS = 15;

BVHParser.RULE_mocap = 0;
BVHParser.RULE_hierarchies = 1;
BVHParser.RULE_rootSegment = 2;
BVHParser.RULE_segmentID = 3;
BVHParser.RULE_segmentBody = 4;
BVHParser.RULE_offsets = 5;
BVHParser.RULE_offset = 6;
BVHParser.RULE_mchannels = 7;
BVHParser.RULE_channel = 8;
BVHParser.RULE_subSegments = 9;
BVHParser.RULE_subSegment = 10;
BVHParser.RULE_jointSegment = 11;
BVHParser.RULE_endSite = 12;
BVHParser.RULE_frames = 13;
BVHParser.RULE_numFrames = 14;
BVHParser.RULE_frameTime = 15;
BVHParser.RULE_motionData = 16;

function MocapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_mocap;
    return this;
}

MocapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MocapContext.prototype.constructor = MocapContext;

MocapContext.prototype.hierarchies = function() {
    return this.getTypedRuleContext(HierarchiesContext,0);
};

MocapContext.prototype.frames = function() {
    return this.getTypedRuleContext(FramesContext,0);
};

MocapContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


MocapContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterMocap(this);
	}
};

MocapContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitMocap(this);
	}
};




BVHParser.MocapContext = MocapContext;

BVHParser.prototype.mocap = function() {

    var localctx = new MocapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BVHParser.RULE_mocap);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 34;
            this.match(BVHParser.WS);
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 40;
        this.match(BVHParser.T__0);
        this.state = 41;
        this.hierarchies(0);
        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 42;
            this.match(BVHParser.WS);
            this.state = 47;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 48;
        this.match(BVHParser.T__1);
        this.state = 49;
        this.frames();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HierarchiesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_hierarchies;
    return this;
}

HierarchiesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HierarchiesContext.prototype.constructor = HierarchiesContext;

HierarchiesContext.prototype.rootSegment = function() {
    return this.getTypedRuleContext(RootSegmentContext,0);
};

HierarchiesContext.prototype.hierarchies = function() {
    return this.getTypedRuleContext(HierarchiesContext,0);
};

HierarchiesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterHierarchies(this);
	}
};

HierarchiesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitHierarchies(this);
	}
};



BVHParser.prototype.hierarchies = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new HierarchiesContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, BVHParser.RULE_hierarchies, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.rootSegment();
        this._ctx.stop = this._input.LT(-1);
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new HierarchiesContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, BVHParser.RULE_hierarchies);
                this.state = 54;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 55;
                this.rootSegment(); 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function RootSegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_rootSegment;
    return this;
}

RootSegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootSegmentContext.prototype.constructor = RootSegmentContext;

RootSegmentContext.prototype.segmentID = function() {
    return this.getTypedRuleContext(SegmentIDContext,0);
};

RootSegmentContext.prototype.segmentBody = function() {
    return this.getTypedRuleContext(SegmentBodyContext,0);
};

RootSegmentContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


RootSegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterRootSegment(this);
	}
};

RootSegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitRootSegment(this);
	}
};




BVHParser.RootSegmentContext = RootSegmentContext;

BVHParser.prototype.rootSegment = function() {

    var localctx = new RootSegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BVHParser.RULE_rootSegment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 61;
            this.match(BVHParser.WS);
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 67;
        this.match(BVHParser.T__2);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 68;
            this.match(BVHParser.WS);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 74;
        this.segmentID();
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 75;
            this.match(BVHParser.WS);
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 81;
        this.match(BVHParser.T__3);
        this.state = 82;
        this.segmentBody();
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 83;
            this.match(BVHParser.WS);
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 89;
        this.match(BVHParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SegmentIDContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_segmentID;
    return this;
}

SegmentIDContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentIDContext.prototype.constructor = SegmentIDContext;

SegmentIDContext.prototype.ID = function() {
    return this.getToken(BVHParser.ID, 0);
};

SegmentIDContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterSegmentID(this);
	}
};

SegmentIDContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitSegmentID(this);
	}
};




BVHParser.SegmentIDContext = SegmentIDContext;

BVHParser.prototype.segmentID = function() {

    var localctx = new SegmentIDContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BVHParser.RULE_segmentID);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(BVHParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SegmentBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_segmentBody;
    return this;
}

SegmentBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentBodyContext.prototype.constructor = SegmentBodyContext;

SegmentBodyContext.prototype.offsets = function() {
    return this.getTypedRuleContext(OffsetsContext,0);
};

SegmentBodyContext.prototype.NUM = function() {
    return this.getToken(BVHParser.NUM, 0);
};

SegmentBodyContext.prototype.mchannels = function() {
    return this.getTypedRuleContext(MchannelsContext,0);
};

SegmentBodyContext.prototype.subSegments = function() {
    return this.getTypedRuleContext(SubSegmentsContext,0);
};

SegmentBodyContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


SegmentBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterSegmentBody(this);
	}
};

SegmentBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitSegmentBody(this);
	}
};




BVHParser.SegmentBodyContext = SegmentBodyContext;

BVHParser.prototype.segmentBody = function() {

    var localctx = new SegmentBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BVHParser.RULE_segmentBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.offsets();
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 94;
            this.match(BVHParser.WS);
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 100;
        this.match(BVHParser.T__5);
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 101;
            this.match(BVHParser.WS);
            this.state = 106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 107;
        this.match(BVHParser.NUM);
        this.state = 108;
        this.mchannels(0);
        this.state = 109;
        this.subSegments(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OffsetsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_offsets;
    return this;
}

OffsetsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OffsetsContext.prototype.constructor = OffsetsContext;

OffsetsContext.prototype.offset = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OffsetContext);
    } else {
        return this.getTypedRuleContext(OffsetContext,i);
    }
};

OffsetsContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


OffsetsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterOffsets(this);
	}
};

OffsetsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitOffsets(this);
	}
};




BVHParser.OffsetsContext = OffsetsContext;

BVHParser.prototype.offsets = function() {

    var localctx = new OffsetsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BVHParser.RULE_offsets);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 111;
            this.match(BVHParser.WS);
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 117;
        this.match(BVHParser.T__6);
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 118;
            this.match(BVHParser.WS);
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 124;
        this.offset();
        this.state = 128;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 125;
            this.match(BVHParser.WS);
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 131;
        this.offset();
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 132;
            this.match(BVHParser.WS);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 138;
        this.offset();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OffsetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_offset;
    return this;
}

OffsetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OffsetContext.prototype.constructor = OffsetContext;

OffsetContext.prototype.NUM = function() {
    return this.getToken(BVHParser.NUM, 0);
};

OffsetContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterOffset(this);
	}
};

OffsetContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitOffset(this);
	}
};




BVHParser.OffsetContext = OffsetContext;

BVHParser.prototype.offset = function() {

    var localctx = new OffsetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BVHParser.RULE_offset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(BVHParser.NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MchannelsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_mchannels;
    return this;
}

MchannelsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MchannelsContext.prototype.constructor = MchannelsContext;

MchannelsContext.prototype.channel = function() {
    return this.getTypedRuleContext(ChannelContext,0);
};

MchannelsContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


MchannelsContext.prototype.mchannels = function() {
    return this.getTypedRuleContext(MchannelsContext,0);
};

MchannelsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterMchannels(this);
	}
};

MchannelsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitMchannels(this);
	}
};



BVHParser.prototype.mchannels = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MchannelsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, BVHParser.RULE_mchannels, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 143;
            this.match(BVHParser.WS);
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 149;
        this.channel();
        this._ctx.stop = this._input.LT(-1);
        this.state = 161;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MchannelsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, BVHParser.RULE_mchannels);
                this.state = 151;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===BVHParser.WS) {
                    this.state = 152;
                    this.match(BVHParser.WS);
                    this.state = 157;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 158;
                this.channel(); 
            }
            this.state = 163;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ChannelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_channel;
    return this;
}

ChannelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChannelContext.prototype.constructor = ChannelContext;

ChannelContext.prototype.ID = function() {
    return this.getToken(BVHParser.ID, 0);
};

ChannelContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterChannel(this);
	}
};

ChannelContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitChannel(this);
	}
};




BVHParser.ChannelContext = ChannelContext;

BVHParser.prototype.channel = function() {

    var localctx = new ChannelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BVHParser.RULE_channel);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(BVHParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubSegmentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_subSegments;
    return this;
}

SubSegmentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubSegmentsContext.prototype.constructor = SubSegmentsContext;

SubSegmentsContext.prototype.subSegment = function() {
    return this.getTypedRuleContext(SubSegmentContext,0);
};

SubSegmentsContext.prototype.subSegments = function() {
    return this.getTypedRuleContext(SubSegmentsContext,0);
};

SubSegmentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterSubSegments(this);
	}
};

SubSegmentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitSubSegments(this);
	}
};



BVHParser.prototype.subSegments = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SubSegmentsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, BVHParser.RULE_subSegments, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.subSegment();
        this._ctx.stop = this._input.LT(-1);
        this.state = 173;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new SubSegmentsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, BVHParser.RULE_subSegments);
                this.state = 169;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 170;
                this.subSegment(); 
            }
            this.state = 175;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function SubSegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_subSegment;
    return this;
}

SubSegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubSegmentContext.prototype.constructor = SubSegmentContext;

SubSegmentContext.prototype.jointSegment = function() {
    return this.getTypedRuleContext(JointSegmentContext,0);
};

SubSegmentContext.prototype.endSite = function() {
    return this.getTypedRuleContext(EndSiteContext,0);
};

SubSegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterSubSegment(this);
	}
};

SubSegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitSubSegment(this);
	}
};




BVHParser.SubSegmentContext = SubSegmentContext;

BVHParser.prototype.subSegment = function() {

    var localctx = new SubSegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BVHParser.RULE_subSegment);
    try {
        this.state = 178;
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 176;
            this.jointSegment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 177;
            this.endSite();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JointSegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_jointSegment;
    return this;
}

JointSegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JointSegmentContext.prototype.constructor = JointSegmentContext;

JointSegmentContext.prototype.segmentID = function() {
    return this.getTypedRuleContext(SegmentIDContext,0);
};

JointSegmentContext.prototype.segmentBody = function() {
    return this.getTypedRuleContext(SegmentBodyContext,0);
};

JointSegmentContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


JointSegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterJointSegment(this);
	}
};

JointSegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitJointSegment(this);
	}
};




BVHParser.JointSegmentContext = JointSegmentContext;

BVHParser.prototype.jointSegment = function() {

    var localctx = new JointSegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BVHParser.RULE_jointSegment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 180;
            this.match(BVHParser.WS);
            this.state = 185;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 186;
        this.match(BVHParser.T__7);
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 187;
            this.match(BVHParser.WS);
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 193;
        this.segmentID();
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 194;
            this.match(BVHParser.WS);
            this.state = 199;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 200;
        this.match(BVHParser.T__3);
        this.state = 201;
        this.segmentBody();
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 202;
            this.match(BVHParser.WS);
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 208;
        this.match(BVHParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EndSiteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_endSite;
    return this;
}

EndSiteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndSiteContext.prototype.constructor = EndSiteContext;

EndSiteContext.prototype.offsets = function() {
    return this.getTypedRuleContext(OffsetsContext,0);
};

EndSiteContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


EndSiteContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterEndSite(this);
	}
};

EndSiteContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitEndSite(this);
	}
};




BVHParser.EndSiteContext = EndSiteContext;

BVHParser.prototype.endSite = function() {

    var localctx = new EndSiteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BVHParser.RULE_endSite);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 210;
            this.match(BVHParser.WS);
            this.state = 215;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 216;
        this.match(BVHParser.T__8);
        this.state = 220;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 217;
            this.match(BVHParser.WS);
            this.state = 222;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 223;
        this.match(BVHParser.T__3);
        this.state = 227;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 224;
                this.match(BVHParser.WS); 
            }
            this.state = 229;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
        }

        this.state = 230;
        this.offsets();
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 231;
            this.match(BVHParser.WS);
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 237;
        this.match(BVHParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FramesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_frames;
    return this;
}

FramesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FramesContext.prototype.constructor = FramesContext;

FramesContext.prototype.numFrames = function() {
    return this.getTypedRuleContext(NumFramesContext,0);
};

FramesContext.prototype.frameTime = function() {
    return this.getTypedRuleContext(FrameTimeContext,0);
};

FramesContext.prototype.motionData = function() {
    return this.getTypedRuleContext(MotionDataContext,0);
};

FramesContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BVHParser.WS);
    } else {
        return this.getToken(BVHParser.WS, i);
    }
};


FramesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterFrames(this);
	}
};

FramesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitFrames(this);
	}
};




BVHParser.FramesContext = FramesContext;

BVHParser.prototype.frames = function() {

    var localctx = new FramesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BVHParser.RULE_frames);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 239;
            this.match(BVHParser.WS);
            this.state = 244;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 245;
        this.match(BVHParser.T__9);
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 246;
            this.match(BVHParser.WS);
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 252;
        this.numFrames();
        this.state = 256;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 253;
            this.match(BVHParser.WS);
            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 259;
        this.match(BVHParser.T__10);
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BVHParser.WS) {
            this.state = 260;
            this.match(BVHParser.WS);
            this.state = 265;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 266;
        this.frameTime();
        this.state = 267;
        this.motionData();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumFramesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_numFrames;
    return this;
}

NumFramesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumFramesContext.prototype.constructor = NumFramesContext;

NumFramesContext.prototype.NUM = function() {
    return this.getToken(BVHParser.NUM, 0);
};

NumFramesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterNumFrames(this);
	}
};

NumFramesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitNumFrames(this);
	}
};




BVHParser.NumFramesContext = NumFramesContext;

BVHParser.prototype.numFrames = function() {

    var localctx = new NumFramesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BVHParser.RULE_numFrames);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(BVHParser.NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FrameTimeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_frameTime;
    return this;
}

FrameTimeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FrameTimeContext.prototype.constructor = FrameTimeContext;

FrameTimeContext.prototype.NUM = function() {
    return this.getToken(BVHParser.NUM, 0);
};

FrameTimeContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterFrameTime(this);
	}
};

FrameTimeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitFrameTime(this);
	}
};




BVHParser.FrameTimeContext = FrameTimeContext;

BVHParser.prototype.frameTime = function() {

    var localctx = new FrameTimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BVHParser.RULE_frameTime);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(BVHParser.NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MotionDataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BVHParser.RULE_motionData;
    return this;
}

MotionDataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MotionDataContext.prototype.constructor = MotionDataContext;


MotionDataContext.prototype.enterRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.enterMotionData(this);
	}
};

MotionDataContext.prototype.exitRule = function(listener) {
    if(listener instanceof BVHListener ) {
        listener.exitMotionData(this);
	}
};




BVHParser.MotionDataContext = MotionDataContext;

BVHParser.prototype.motionData = function() {

    var localctx = new MotionDataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BVHParser.RULE_motionData);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 273;
                this.matchWildcard(); 
            }
            this.state = 278;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


BVHParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.hierarchies_sempred(localctx, predIndex);
	case 7:
			return this.mchannels_sempred(localctx, predIndex);
	case 9:
			return this.subSegments_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BVHParser.prototype.hierarchies_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

BVHParser.prototype.mchannels_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

BVHParser.prototype.subSegments_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.BVHParser = BVHParser;
