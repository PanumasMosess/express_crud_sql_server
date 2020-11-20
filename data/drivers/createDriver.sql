INSERT INTO [dbo].[tbl_driver_mst]
           (
            [driver_code]
           ,[driver_pass_md5]
           ,[driver_name_th]
           ,[driver_name_en]
           ,[driver_company]
           ,[driver_section]
           ,[driver_truck_head_no]
           ,[driver_truck_tail_no]
           ,[driver_truck_type]
           ,[driver_sign]
           ,[driver_status]
           ,[driver_issue_by]
           ,[driver_issue_date]
           ,[driver_issue_time]
           ,[driver_issue_datetime]
           )
     VALUES
           (
            @driver_code
           ,@driver_pass_md5
           ,@driver_name_th
           ,@driver_name_en
           ,@driver_company
           ,@driver_section
           ,@driver_truck_head_no
           ,@driver_truck_tail_no
           ,@driver_truck_type
           ,@driver_sign
           ,@driver_status
           ,@driver_issue_by
           ,CAST(GETDATE() AS Date)
           ,CURRENT_TIMESTAMP 
           ,GETDATE()
           )
    SELECT SCOPE_IDENTITY() AS driver_id