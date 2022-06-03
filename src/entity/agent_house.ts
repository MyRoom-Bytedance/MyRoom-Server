import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgentHouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  listing_name: string;

  @Column({nullable: true})
  first_upload_at: string;

  @Column({nullable: true})
  pricing: string;

  @Column({nullable: true})
  squaremeter: string;

  @Column({nullable: true})
  downpayment: string;

  @Column({nullable: true})
  floor: string;

  @Column({nullable: true})
  total_floor: string;

  @Column({nullable: true})
  dict_house_id: string;

  @Column({nullable: true})
  room_structure: string;

  @Column({nullable: true})
  ladder_ration: string;

  @Column({nullable: true})
  heating_type: string;

  @Column({nullable: true})
  house_duration: string;

  @Column({nullable: true})
  property_right: string;

  @Column({nullable: true})
  mortgage: string;

  @Column({nullable: true})
  usage_area: string;

  @Column({nullable: true})
  floor_level: string;

  @Column({nullable: true})
  facing_type: string;

  @Column({nullable: true})
  decoration_type: string;

  @Column({nullable: true})
  building_type: string;

  @Column({nullable: true})
  built_year: string;

  @Column({nullable: true})
  city_name: string;

  @Column({nullable: true})
  city_code: string;

  @Column({nullable: true})
  neighborhood_name: string;

  @Column({nullable: true})
  neighborhood_source_code: string;

  @Column({nullable: true})
  floor_plan_room: string;

  @Column({nullable: true})
  floor_plan_hall: string;

  @Column({nullable: true})
  floor_plan_bath: string;

  @Column({nullable: true})
  floor_plan_kitchen: string;

  @Column({nullable: true})
  house_type: string;

  @Column({nullable: true})
  layout_type: string;

  @Column({nullable: true})
  last_publish_time: string;

  @Column({nullable: true})
  ownership: string;

  @Column({nullable: true})
  right_property: string;

  @Column({nullable: true})
  property_management_type: string;

  @Column({nullable: true})
  elevator: string;

  @Column({nullable: true})
  house_status: string;

  @Column({nullable: true})
  online_house_status: string;

  @Column({nullable: true})
  created_at: string;

  @Column({nullable: true})
  updated_at: string;

  @Column({nullable: true})
  data_source_id: string;

  @Column({nullable: true})
  offline_code: string;

  @Column({nullable: true})
  source_code: string;

  @Column({nullable: true})
  start_version: string;

  @Column({nullable: true})
  last_version: string;

  @Column({nullable: true})
  crawl_id: string;

  @Column({nullable: true})
  task_id: string;

  @Column({nullable: true})
  house_card: string;

  @Column({nullable: true})
  online_neighborhood_id: string;

  @Column({nullable: true})
  online_city_id: string;

  @Column({nullable: true})
  online_district_id: string;

  @Column({nullable: true})
  online_area_id: string;

  @Column({nullable: true})
  property_only: string;

  @Column({nullable: true})
  property_certificate_period: string;

}