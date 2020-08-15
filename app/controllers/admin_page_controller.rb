class AdminPageController < ApplicationController
    def index
        if cookies[:referer].present?
            if cookies[:referer] == "hadrien"
                @logos = Logo.all.sort_by(&:created_at)
                @covers = Cover.all.sort_by(&:created_at)
                @behances = Behance.all.sort_by(&:created_at)

            end
        else
            redirect_to root_path
        end
    end
end
