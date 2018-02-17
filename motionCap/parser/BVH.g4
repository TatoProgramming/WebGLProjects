grammar BVH;

mocap :	WS* 'HIERARCHY' hierarchies WS* 'MOTION' frames;

hierarchies : hierarchies rootSegment
            | rootSegment
            ;

rootSegment : WS* 'ROOT' WS* segmentID WS* '{' segmentBody WS* '}' ;

segmentID : ID ;

segmentBody : offsets WS* 'CHANNELS' WS* NUM mchannels subSegments;

offsets : WS* 'OFFSET' WS* offset WS* offset WS* offset ;

offset : NUM ;

mchannels : mchannels WS* channel
         | WS* channel
         ;

channel : ID ;

subSegments : subSegments subSegment
            | subSegment
            ;

subSegment : jointSegment | endSite ;

jointSegment : WS* 'JOINT' WS* segmentID WS* '{' segmentBody WS* '}' ;

endSite : WS* 'End Site' WS* '{' WS* offsets WS* '}' ;

frames : WS* 'Frames:' WS* numFrames WS* 'Frame Time:' WS* frameTime motionData ;

numFrames : NUM ;

frameTime : NUM ;

motionData : .*?;

NUM : (('-'? DIGIT+ ('.' DIGIT+)?) | ('-'? '.' DIGIT+)) ('e' '-'? DIGIT+)?;
ID : LETTER (LETTER | DIGIT)+ ;

COMMENT
  :   ( '//' ~[\r\n]* '\r'? '\n'
      | '/*' .*? '*/'
      ) -> skip
  ;

WS
//  :  (' ' | '\t' | '\n' | '\r' | '\f')+ -> skip
//  :  (' ' | '\t' | '\n' | '\r' | '\f')+ -> channel(HIDDEN)
  :  (' ' | '\t' | '\n' | '\r' | '\f')+
  ; 

fragment LETTER : ('a'..'z' | 'A'..'Z');
fragment DIGIT  : ('0'..'9');

