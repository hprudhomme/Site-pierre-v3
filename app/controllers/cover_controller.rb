class CoverController < ApplicationController

    def index
        @covers = Cover.all;
        @count = 0;
    end
end
