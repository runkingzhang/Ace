/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // insert code to be run at timeline end here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'note'
   (function(symbolName) {   
   
   })("note");
   //Edge symbol end:'note'

})(jQuery, AdobeEdge, "EDGE-88919355");