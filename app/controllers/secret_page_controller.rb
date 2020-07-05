class SecretPageController < ApplicationController
    def index
        if cookies[:referer].present?
            redirect_to admin_page_index_path
        else
            if  params[:admin].present?
                if params[:admin] == "hadrien"
                    cookies[:referer] = { :value => params[:admin], :expires => Time.now + 1.hour}
                    redirect_to admin_page_index_path
                end
            end
        end
    end
end
