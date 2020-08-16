class BehanceController < ApplicationController
    def index
        @behances = Behance.all.sort_by(&:created_at);
        @count = 0;
    end

    def create

        if params[:behance].present?
            @params_behance = params[:behance]
          end

        @behance = Behance.new(title: @params_behance["title"], content: @params_behance["content"], link: @params_behance["link"], background: @params_behance["background"], color: @params_behance["color"])

        if @behance.save
          @behance.image.attach(@params_behance["image"])
          puts "behance Save"
          puts params
          redirect_to request.referrer;
        else
          puts "fail";
          redirect_to request.referrer;
        end
    end

    def destroy
        @behance = Behance.find(params[:id])
        @behance.destroy
      
        redirect_to request.referrer;
    end


    def update     

      @behance = Behance.find(params[:id])
      if @behance.update(title: params[:title], content: params[:content])
          redirect_to request.referrer;
      else
        redirect_to request.referrer;
      end
    end
end
