
export class RequestDto
{
    userId:string;
    Request_Date:string;
    Company_Name:string;
    Sub_Contractor_Id:string;
    Foreman:string;
    Foreman_Phone_Number:string;
    Activity:string;
    Type_Of_Activity_Id:string;
    Working_Date:string;
    Start_Time:string;
    End_Time:string;
    Site_Id:string;
    Building_Id:string;
    Floor_Id:string;
    Room_Nos:string;
    Room_Type:string;
    Crane_Requested:string;
    Crane_Number:string;
    Tools:string;
    Machinery:string;
    Hot_work:string;
    Certified_Person:string;
    LOTO_Procedure:string;
    LOTO_Number:string;
    Power_Off_Required:string;
    Number_Of_Workers:string;
    Badge_Numbers:string;
    Notes:string; 
    Request_status:string;
    PermitNo:string;
    teamId:string;
    building_name: string;
  tasks_in_progress_in_the_area: string;
  account_during_the_work: any;
  lighting_sufficiently: any;
  spesific_risks_based_on_task: any;
  work_environment_safety_ensured: any;
  course_of_action_in_emergencies: any;
  name_of_the_fire_watcher: any;
  phone_number_of_fire_watcher: any;
  fire_watch_establish: any;
  combustible_material: any;
  safety_measures: any;
  extinguishers_and_fire_blanket: any;
  welding_activitiy: any;
  air_extraction_be_established: any;
  heat_treatment: any;
  new_sub_contractor: any;
  affecting_other_contractors: any;
  other_conditions: any;
  lighting_begin_work: any;
  specific_risks: any;
  environment_ensured: any;
  course_of_action: any;
  working_on_electrical_system: any;
  responsible_for_the_informed: any;
  de_energized: any;
  if_no_loto: any;
  do_risk_assessment: any;
  if_yes_loto: any;
  electrician_certification: any;
  electricity_have_isulation: any;
  working_hazardious_substen: any;
  relevant_mal: any;
  msds: any;
  equipment_taken_account: any;
  ventilation: any;
  hazardaus_substances: any;
  storage_and_disposal: any;
  reachable_case: any;
  checical_risk_assessment: any;
  pressure_tesing_of_equipment: any;
  transfer_of_palnt: any;
  area_drained: any;
  area_depressurised: any;
  area_flused: any;
  tank_area_container: any;
  system_free_for_dust: any;
  loto_plan_submitted: any;

  working_at_height: any;
  segragated_demarkated: any;
  lanyard_attachments: any;
  rescue_plan: any;
  avoid_hazards: any;
  height_training: any;
  supervision: any;
  shock_absorbing: any;
  height_equipments: any;
  vertical_life: any;
  secured_falling: any;
  dropped_objects: any;
  safe_acces: any;
  weather_acceptable: any;
  working_confined_spaces: any;
  vapours_gases: any;
  lel_measurement: any;
  all_equipment: any;
  exit_conditions: any;
  communication_emergency: any;
  rescue_equipments: any;
  space_ventilation: any;
  oxygen_meter: any;
  work_in_atex_area: any;
  ex_area_downgraded: any;
  atmospheric_tester: any;
  flammable_materials: any;
  potential_explosive: any;
  oxygen_meter_confined_spaces: any;
  securing_facilities: any;
  loto_facilities: any;
  system_depressurised: any;
  passive_pause_other: any;
  electricity_have_insulation: any;
  covered_or_secured: any;
  excavation_works: any;
  excavation_segregated: any;
  nn_standards: any;
  danish_regulation: any;
  safe_access_and_egress: any;
  correctly_sloped: any;
  inspection_dates: any;
  marked_drawings: any;
  underground_areas_cleared: any;
  using_cranes_or_lifting: any;
  appointed_person: any;
  vendor_supplier: any;
  lift_plan: any;
  supplied_and_inspected: any;
  legal_required_certificates: any;
  prapared_lifting: any;
  lifting_task_fenced: any;
  overhead_risks: any;
  visible_clothing: any;
  safety_shoes: any;
  helmet: any;
  description_of_activity : any;
rams_file: any;
specific_gloves: any;
eye_protection: any;
fall_protection: any;
hearing_protection: any;
respiratory_protection: any;
other_ppe: any;
other_conditions_input: any;
  rams_number: any;
  people_electrician_certification: any;

}


export class EditRequestDto
{
    userId:string;
    Request_Date:string;
    Company_Name:string;
    Sub_Contractor_Id:string;
    Foreman:string;
    Foreman_Phone_Number:string;
    Activity:string;
    Type_Of_Activity_Id:string;
    Working_Date:string;
    Start_Time:string;
    End_Time:string;
    Site_Id:string;
    Building_Id:string;
    Floor_Id:string;
    Room_Nos:string;
    Room_Type:string;
    Crane_Requested:string;
    Crane_Number:string;
    Tools:string;
    Machinery:string;
    Hot_work:number;
    Certified_Person:string;
    LOTO_Procedure:string;
    LOTO_Number:string;
    Power_Off_Required:string;
    Number_Of_Workers:string;
    Badge_Numbers:string;
    Notes:string; 
    Request_status:string;
    PermitNo:string;
    id:string;
    Assign_Start_Time:string;
    Assign_End_Time:string;
    Safety_Precautions:string;
    Special_Instructions:string;
    teamId:string;
    createdTime: string;
  name_of_the_fire_watcher: any;
  phone_number_of_fire_watcher: any;
  tasks_in_progress_in_the_area: any;
  account_during_the_work: any;
  lighting_sufficiently: any;
  spesific_risks_based_on_task: any;
  work_environment_safety_ensured: any;
  course_of_action_in_emergencies: any;
  fire_watch_establish: any;
  combustible_material: any;
  extinguishers_and_fire_blanket: any;
  safety_measures: any;
  welding_activitiy: any;
  heat_treatment: any;
  air_extraction_be_established: any;
  new_sub_contractor: any;
  affecting_other_contractors: any;
  other_conditions: any;
  lighting_begin_work: any;
  specific_risks: any;
  environment_ensured: any;
  course_of_action: any;
  working_on_electrical_system: any;
  responsible_for_the_informed: any;
  de_energized: any;
  if_no_loto: any;
  do_risk_assessment: any;
  if_yes_loto: any;
  electricity_have_isulation: any;
  electrician_certification: any;
  working_hazardious_substen: any;
  relevant_mal: any;
  msds: any;
  ventilation: any;
  equipment_taken_account: any;
  hazardaus_substances: any;
  storage_and_disposal: any;
  reachable_case: any;
  checical_risk_assessment: any;
  pressure_tesing_of_equipment: any;
  transfer_of_palnt: any;
  area_drained: any;
  area_depressurised: any;
  area_flused: any;
  tank_area_container: any;
  system_free_for_dust: any;
  loto_plan_submitted: any;
  working_at_height: any;
  segragated_demarkated: any;
  lanyard_attachments: any;
  rescue_plan: any;
  avoid_hazards: any;
  height_training: any;
  supervision: any;
  shock_absorbing: any;
  vertical_life: any;
  height_equipments: any;
  secured_falling: any;
  dropped_objects: any;
  safe_acces: any;
  weather_acceptable: any;
  working_confined_spaces: any;
  vapours_gases: any;
  lel_measurement: any;
  all_equipment: any;
  exit_conditions: any;
  communication_emergency: any;
  rescue_equipments: any;
  space_ventilation: any;
  oxygen_meter: any;
  work_in_atex_area: any;
  ex_area_downgraded: any;
  atmospheric_tester: any;
  flammable_materials: any;
  potential_explosive: any;
  oxygen_meter_confined_spaces: any;
  securing_facilities: any;
  loto_facilities: any;
  system_depressurised: any;
  passive_pause_other: any;
  covered_or_secured: any;
  excavation_works: any;
  excavation_segregated: any;
  nn_standards: any;
  danish_regulation: any;
  safe_access_and_egress: any;
  correctly_sloped: any;
  inspection_dates: any;
  marked_drawings: any;
  underground_areas_cleared: any;
  using_cranes_or_lifting: any;
  appointed_person: any;
  vendor_supplier: any;
  lift_plan: any;
  supplied_and_inspected: any;
  legal_required_certificates: any;
  prapared_lifting: any;
  lifting_task_fenced: any;
  overhead_risks: any;
  visible_clothing: any;
  safety_shoes: any;
  helmet: any;
  rams_file: any;
  description_of_activity: any;
  specific_gloves: any;
  eye_protection: any;
  fall_protection: any;
  hearing_protection: any;
  respiratory_protection: any;
  other_ppe: any;
  other_conditions_input: any;
  people_electrician_certification: any;
  ConM_initials: any;
  ConM_initials1: any
  electricity_have_insulation: any;
  name_of_the_fire_watcher1: any;
  phone_number_of_fire_watcher1: any;
}

export class DeleteRequestDto
{
    id:string;
}

export class UpdateRequestStatusListDto
{
    Request_status : string;
    id :string;
    userId:string;
}

export class CopyRequestDto
{
    userId:string;
    Request_Date:string;
    Company_Name:string;
    PermitNo:string;
    Sub_Contractor_Id:string;
    Foreman:string;
    Foreman_Phone_Number:string;
    Activity:string;
    Type_Of_Activity_Id:string;
    Working_Date:string;
    Start_Time:string;
    End_Time:string;
    Site_Id:string;
    Building_Id:string;
    Floor_Id:string;
    Room_Nos:string;
    Room_Type:string;
    Crane_Requested:string;
    Crane_Number:string;
    Tools:string;
    Machinery:string;
    Hot_work:string;
    Certified_Person:string;
    LOTO_Procedure:string;
    LOTO_Number:string;
    Power_Off_Required:string;
    Number_Of_Workers:string;
    Badge_Numbers:string;
    Notes:string; 
    Request_status:string;
    Assign_Start_Time:string;
    Assign_End_Time:string;
    Safety_Precautions:string;
    Special_Instructions:string;
    Assign_End_Date:string;
    Assign_Start_Date:string;
    teamId:string;
    count:number;
}

export class UpdateClose_Status
{
    Request_status:string;
    Image:any[];
    id:string;
    userId:string;
    createdTime : string
    //files:string  []  =  [];
}

export class RequestsbyId
{
    userId:string;
}

export class RequestBySubcontractorId
{
    SubContractorId:string;
} 