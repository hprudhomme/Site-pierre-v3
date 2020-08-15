class CoverController < ApplicationController

    def index
        @covers = Cover.all.sort_by(&:created_at);
        @count = 0;
    end

    def new

    end

    def create

        if params[:cover].present?
            @params_cover = params[:cover]
          end

        @cover = Cover.new(title: @params_cover["title"], content: @params_cover["content"], background: @params_cover["background"], color: @params_cover["color"])

        if @cover.save
          @cover.image.attach(@params_cover["image"])
          puts "Cover Save"
          puts params
          @covers = Cover.all
          @logos = Logo.all
          redirect_to admin_page_index_path;
        else
          puts "fail";
          redirect_to request.referrer;
        end
    end

    def destroy
        @cover = Cover.find(params[:id])
        @cover.destroy
      
        redirect_to request.referrer;
    end


    def update     

      @cover = Cover.find(params[:id])
      if @cover.update(title: params[:title], content: params[:content], background: params[:background], color: params[:color])
          redirect_to request.referrer;
      else
        redirect_to request.referrer;
      end
    end


end
