function(resp) {
  var selectedSprintNumber = $$('#sprint_filter').selectedSprintNumber || "unassigned";
  $.log("Selected sprint number:");
  $.log(selectedSprintNumber);
  return {
    sprints: $.map(resp.rows, function(row) {
      var sprintNumber = row.key[0];
      var name = sprintNumber ? "Sprint " + sprintNumber : "Unassigned";
      var value = sprintNumber || "unassigned";
      return { 
        name: name,  
        value: value, 
        isSelected: function() {
          return selectedSprintNumber == sprintNumber;
        }
      };
    })
  };
}
