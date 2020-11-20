UPDATE [dbo].[tbl_driver_mst]
SET  [driver_code]=@driver_code
    ,[driver_pass_md5]=@driver_pass_md5
    ,[driver_name_th]=@driver_name_th
    ,[driver_name_en]=@driver_name_en
    ,[driver_company]=@driver_company
    ,[driver_section]=@driver_section
    ,[driver_truck_head_no]=@driver_truck_head_no
    ,[driver_truck_tail_no]=@driver_truck_tail_no
    ,[driver_truck_type]=@driver_truck_type
    ,[driver_sign]=@driver_sign
    ,[driver_status]=@driver_status
    ,[driver_issue_by]=@driver_issue_by
    ,[driver_issue_date]=CAST(GETDATE() AS Date)
    ,[driver_issue_time]=CURRENT_TIMESTAMP 
    ,[driver_issue_datetime]=GETDATE()
WHERE [driver_id]=@driver_id

SELECT * FROM [dbo].[tbl_driver_mst] WHERE [driver_id]=@driver_id