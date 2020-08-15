class LogoController < ApplicationController
    
    def index
        @logos = Logo.all;
        @count = 0;
    end

    def create

        if params[:logo].present?
            @params_logo = params[:logo]
          end

        @logo = Logo.new(title: @params_logo["title"], content: @params_logo["content"], background: @params_logo["background"], color: @params_logo["color"])

        if @logo.save
          @logo.image.attach(@params_logo["image"])
          puts "logo Save"
          puts params
          redirect_to request.referrer;
        else
          puts "fail";
          redirect_to request.referrer;
        end
    end

    def destroy
        @logo = Logo.find(params[:id])
        @logo.destroy
      
        redirect_to request.referrer;
    end


    def update     

      @logo = Logo.find(params[:id])
      if @logo.update(title: params[:title], content: params[:content], background: params[:background], color: params[:color])
          redirect_to request.referrer;
      else
        redirect_to request.referrer;
      end
    end
end
